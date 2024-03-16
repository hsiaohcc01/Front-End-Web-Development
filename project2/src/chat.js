import {
    fetchSession,
    fetchLogin,
    fetchLogout,
    fetchGetMessages,
    fetchPostMessage,
} from './services';

import state, {
    login,
    logout,
    setError,
} from './state';

import {
    render
} from './view';

const appEl = document.querySelector('#app');

function handleLogin() {
    const username = document.querySelector('.login-input').value;
    fetchLogin(username)
        .then(() => fetchGetMessages())
        .then(response => {
            login(response);
            render({ state, appEl });
        })
        .catch(error => {
            setError(error.error);
            render({ state, appEl });
        });
}

function handleLogout() {
    fetchLogout()
        .then(() => {
            logout();
            render({ state, appEl });
        })
        .catch(error => {
            setError(error.error);
            render({ state, appEl });
        });
}

appEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('login-button')) {
        handleLogin();
    } else if (e.target.classList.contains('logout-button')) {
        handleLogout();
    }
});

function handleMessageSubmit() {
    const messageInput = document.querySelector('.message-input');
    const message = messageInput.value.trim();

    fetchPostMessage(message)
        .then(response => {
            login(response);
            render({ state, appEl });
            messageInput.value = '';
        })
        .catch(error => {
            setError(error.error);
            render({ state, appEl });
        });
}

appEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('send-button')) {
        handleMessageSubmit();
    }
});

function initializeChat() {
    fetchSession()
        .then(() => fetchGetMessages())
        .then(response => {
            login(response);
            render({ state, appEl });
        })
        .catch(error => {
            logout();
            render({ state, appEl });
        });
}

function refreshChat() {
    fetchGetMessages()
        .then(response => {
            login(response);

            const usersContainerEl = document.querySelector('.users-container');
            usersContainerEl.innerHTML = getUsers(state.users);

            const messagesContainerEl = document.querySelector('.messages-container');
            messagesContainerEl.innerHTML = getMessages(state.messages);
        })
        .catch(error => {
            setError(error.error);
        })
}

function pollChats() {
    refreshChat();
    setTimeout(pollChats, 5000);
}

initializeChat();
pollChats();
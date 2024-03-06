import { fetchDelete, fetchSession, fetchUpdateWord, fetchLogin, fetchWord } from "./services";
import { render } from "./view";

const app = document.querySelector('#app');
const errorEl = document.querySelector('.error');

const handleError = (err) => {
    switch (err.error) {
        case 'network-error':
            errorEl.innerHTML = `<p>Error: Please check your network connection</p>`;
            break;
        case 'required-username':
        case 'auth-missing':
            errorEl.innerHTML = `<p>Error: Ensure the username is not empty and contains only letters and numbers</p>`;
            break;
        case 'auth-insufficient':
            errorEl.innerHTML = `<p>Error: dog is invalid uersame</p>`;
            break;
        case 'invalid-word':
        case 'required-word':  
            errorEl.innerHTML = `<p>Error: Ensure words contain only letters</p>`;
            break;
        default:
            errorEl.innerHTML = `<p>Error: Unexpected error occurred</p>`;
    }
};

const processLogin = (username) => {
    fetchLogin(username)
        .then(() => {
            errorEl.innerHTML = '';
            return fetchWord();
        })
        .then(({ username, storedWord }) => {
            render(username, storedWord);
        })
        .catch(handleError);
};

const processUpdateWord = (updatedWord) => {
    fetchUpdateWord(updatedWord)
        .then(({ username, storedWord }) => {
            errorEl.innerHTML = '';
            render(username, storedWord);
        })
        .catch(handleError);
};

const processDelete = () => {
    fetchDelete()
        .then(() => {
            errorEl.innerHTML = '';
            render('', '');
        })
        .catch(handleError);
};

const processSession = () => {
    fetchSession()
        .then(({ username }) => fetchWord(username))
        .then(({ username, storedWord }) => {
            render(username, storedWord);
        })
        .catch(handleError);
};

app.addEventListener('click', (e) => {
    const { target } = e;
    const inputEl = document.querySelector('.input'); 

    if (target.classList.contains('login')) {
        processLogin(inputEl.value);
    } else if (target.classList.contains('update')) {
        processUpdateWord(inputEl.value);
    } else if (target.classList.contains('delete')) {
        processDelete();
    }
});

processSession();

export function render({ state, appEl }) {
    let contentHtml;
    if (state.loginStatus) {
        contentHtml = getChatpage(state);
        appEl.innerHTML = `<div class="main">${contentHtml}</div>`;
    } else {
        contentHtml = getMainpage(state);
        appEl.innerHTML = `${contentHtml}`;
    }
}

function getMainpage(state) {
    return `
        <div class="container">
            <label class="form-label">
                <h2>Login to chat</h2>
                ${generateError(state)}
                ${generateLogin()}
            </label>
        </div>
    `;
}

function getChatpage(state) {
    return `
      ${generateError(state)}
      ${generateChat(state)}
    `;
}

function generateError(state) {
    return `<div class="error">${state.error || ''}</div>`;
}

function generateLogin() {
    return `
      <div class="login">
        <input type="text" class="login-input" placeholder="Enter Username">
        <button class="login-button">Get Started</button>
      </div>
    `;
}

function generateChat(state) {
    return `
      <div class="chat-container">
        <div class="users-container">
            <h3>Active Users</h3>
            ${getUsers(state.users)}
        </div>
        <div class="messages-container">
            <ol class="message-list">${getMessages(state.messages)}</ol>
        </div>
        <div class="send-message-container">${sendMessage()}</div>
      </div>
    `;
}

export function getUsers(users) {
    return Object.entries(users).map(([username, user]) => `
      <div class="${user.loginStatus ? 'online-user' : 'offline-user'}">
        ${username}
      </div>
    `).join('');
}

export function getMessages(messages) {
    return messages.slice().reverse().map(message => `
      <div class="one-message-container">
        <div class="username">${message.username}</div>
        <div>${message.message}</div>
      </div>
    `).join('');
}

function sendMessage() {
    return `
    <form class="input-container">
        <input type="text" class="message-input" placeholder="Type your message here">
        <button class="send-button">Send</button>
        <button class="logout-button">Logout</button>
    </form>
    `;
}
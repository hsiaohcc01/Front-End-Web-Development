const app = document.querySelector('#app');

export const render = (username, storedWord) => {
    app.innerHTML = generateHtml(username, storedWord);
    return;
}

const generateHtml = (username, storedWord) => {
    if (!username && !storedWord) {
        return `
        <div class="container">
            
            <label class="form-label">
                <span>Username:</span>
                <input class="input" name="username"/>
            </label>
            
            <button class="login">Login</button>
        </div>
    <div class="error"></div>
    `
    } else {
        return `

            <p class="store-info">${username}, your stored word is:  ${storedWord ? `${storedWord}` : ""}</p>

            <div class="container">
                <label class="form-label">
                    <span>Update word:</span>
                    <input class="input" name="word"/>
                </label>
                <button class="update">Update</button>
            </div>

            <div class="logout">
                <button class="delete">Log out</button>
            </div>
        <div class="error"></div>
        `
    }
}
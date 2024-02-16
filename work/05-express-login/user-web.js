const userWeb = {
    homePage: (username, storedWord) => `

        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <title>Welcome Page</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <div id="user-app">
            ${username ? userWeb.getDataForm(username, storedWord) : userWeb.getLoginForm()}
            </div>
        </body>
        </html>
    `,

    error400: () => `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <title>Access Denied</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <div id="user-app">
                <p>Access Denied: Invalid Username</p>
                <a href="/">Back to login page</a>
            </div>
        </body>
        </html>
    `,

    error403: () => `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <title>Access Restricted</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <div id="user-app">
                <p>Access Denied: Username cannot be "dog"</p>
                <a href="/">Back to login page</a>
            </div>
        </body>
        </html>
    `,

    getLoginForm: () => `
        <div class="login">
            <form action="/login" method="POST">
                <label class="form-label">
                    <span>Username:</span>
                    <input class="form-input" name="username" />
                </label>
                <button type="submit" class="form-btn">Submit</button>
            </form>
        </div>
    `,

    getDataForm: (username, storedWord) => `
        <p class="store-info">${username}, your stored word is:  ${storedWord ? `${storedWord}` : ""}</p>
        
        
        <div class="store">
            <form action="/store" method="POST">
                <label>
                    <span>Update your stored word:</span>
                    <input name="storedWord" />
                </label>
                <button type="submit" class="form-btn">Submit</button>
            </form>
        </div>
        
        <div class="logout">
            <form action="/logout" method="POST">
                <button type="submit" class="logout-btn">Logout</button>
            </form>
        </div>
    `
};

module.exports = userWeb;

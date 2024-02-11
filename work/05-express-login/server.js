const express = require("express");
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = 3000;

const userWeb = require("./user-web");
const user = require("./user.js");

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));


app.get("/", (req, res) => {
	const sessionId = req.cookies.sessionId;
	const username = user.getUserName(sessionId);
	const storedWord = user.getStoredword(username);

    res.send(userWeb.homePage(username, storedWord));
});


app.post("/login", (req, res) => {
	const username = req.body.username.trim();

    if (!username || !/^[a-zA-Z0-9]+$/.test(username)) {
		res.status(400).send(userWeb.error400());
		return;
	}else if (username === 'dog') {
        res.status(403).send(userWeb.error403());
    }else{
        const sessionId = uuidv4();
        res.cookie("sessionId", sessionId);
	    user.setSession(sessionId, username);
	    res.redirect("/");
    }
});


app.post("/store", (req, res) => {
	const sessionId = req.cookies.sessionId;
    if (!sessionId || !user.isSidValid(sessionId)) {
        res.clearCookie("sessionId").sendStatus(401);
        return;
    }

	const storedWord = req.body.storedWord.trim();
	const username = user.getUserName(sessionId)

    user.setStoredWord(username, storedWord)
    res.redirect("/");
});


app.post("/logout", (req, res) => {
    const sessionId = req.cookies.sessionId;
    if (sessionId) {
        user.deleteSession(sessionId);
    }
    res.clearCookie('sessionId').redirect("/");
});

app.listen(PORT, () => {
	console.log(`listening on http://localhost:${PORT}`);
});

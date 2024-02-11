const sessions = {};
const store = {};

const getUserName = (sessionId) => sessions[sessionId]?.username;

const isSidValid = (sessionId) => sessionId in sessions;

const setSession = (sessionId, username) => {
    sessions[sessionId] = { username };
};

const deleteSession = (sessionId) => {
    delete sessions[sessionId];
};

const getStoredword = (username) => store[username];

const setStoredWord = (username, storedWord) => {
    store[username] = storedWord;
};

const user = {
    sessions,
    store,
    getUserName,
    getStoredword,
    isSidValid,
    setSession,
    setStoredWord,
    deleteSession,
};

module.exports = user;

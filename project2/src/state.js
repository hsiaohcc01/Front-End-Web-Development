import { MESSAGES } from "./constant";

const DEFAULT_STATE = {
    loginStatus: false,
    username: '',
    users: {},
    messages: [],
    error: '',
};

const state = structuredClone(DEFAULT_STATE);

const updateState = (updates) => Object.assign(state, updates);

export function login({ username, users, messages }) {
    updateState({
        loginStatus: true,
        username,
        users,
        messages,
        error: ''
    });
}

export function logout() {
    updateState(structuredClone(DEFAULT_STATE));
}

export function getMessages({ messages }) {
    updateState({
        messages,
        error: ''
    });
}

export function setError(errorCode) {
    const errorMessage = errorCode ? MESSAGES[errorCode] || MESSAGES.default : '';
    updateState({ error: errorMessage });
}

export default state;
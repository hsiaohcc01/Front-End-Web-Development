function handleNetworkError(error) {
    return Promise.reject({ error: 'network-error' });
}

function processResponse(response) {
    if (!response.ok) {
        return response.json().then(error => Promise.reject(error));
    }
    return response.json();
}

export function fetchSession() {
    return fetch('/api/session')
        .catch(handleNetworkError)
        .then(processResponse);
}

export function fetchLogin(username) {
    return fetch('/api/session/', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ username }),
    })
        .catch(handleNetworkError)
        .then(processResponse);
}

export function fetchLogout() {
    return fetch('/api/session', { method: 'DELETE' })
        .catch(handleNetworkError)
        .then(response => {
            if (response.ok) {
                console.log('logout success');
                return {};
            }
            return processResponse(response);
        });
}

export function fetchGetMessages() {
    return fetch('/api/messages')
        .catch(handleNetworkError)
        .then(processResponse);
}

export function fetchPostMessage(message) {
    return fetch('/api/message', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ message })
    })
        .catch(handleNetworkError)
        .then(processResponse);
}
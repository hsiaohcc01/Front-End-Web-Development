import { useState } from 'react';

function Login({ setIsLoggedIn, setUsername }) {
    const [error, setError] = useState('');
    const [usernameInput, setUsernameInput] = useState('');

    function isValidUsername(username) {
        return username !== 'dog' && /^[A-Za-z0-9_]+$/.test(username.trim());
    }

    function handleLogin() {
        if (isValidUsername(usernameInput)) {
            setIsLoggedIn(true);
            setUsername(usernameInput);
            setError('');
        } else {
            setIsLoggedIn(false);
            setError(`Error: ${usernameInput === 'dog' ? 'dog is not a valid user' : 'Ensure the username is non-empty and alphanumeric.'}`);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
        setUsernameInput('');
    };

    return (
        <div className="login-page">
            <span>Login to Your Account: </span>
            <form onSubmit={handleSubmit}>
                <input
                    className='name-input'
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                    placeholder="Enter your username"
                />
                <button type="submit" className="login-button">Login</button>
            </form>
            <div className="error">{error}</div>
        </div>
    );
}

export default Login;
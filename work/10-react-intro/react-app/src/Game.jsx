import { useState } from "react";
import Compare from "./compare";

function Game({ setIsLoggedIn, username, setUsername }) {
    const [state, setState] = useState({
        userGuess: "",
        info: "",
    });
    const secret = "RECAT";

    const submitHandler = (e) => {
        e.preventDefault();
        const { userGuess } = state;
        const result = Compare(userGuess, secret);

        if (typeof result === 'string') {
            setState({ ...state, info: result });
        } else if (typeof result === 'number') {
            setState({ ...state, info: `${userGuess} had ${result} letters in common` });
        } else if (result === true) {
            setState({ ...state, userGuess: '', info: `${userGuess} is the secret word!` });
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setState({ userGuess: '', info: '' });
    };

    const handleInput = (e) => {
        setState({ ...state, userGuess: e.target.value });
    };

    return (
        <div className="game">
            <div className="logout">
                <h3>Hi, {username}</h3>
            </div>

            <form className="guess-form" onSubmit={submitHandler}>
                {state.info && <p className="alert">{state.info}</p>}
                <label className="form-label">
                    <span>Please input a 5 letter word:</span>
                    <input
                        aria-label="Guess input"
                        className="form-input"
                        value={state.userGuess}
                        onInput={handleInput}
                        maxLength={5}
                        placeholder="Enter your guess here"
                    />
                </label>
                <button type="submit" className="form-button">Guess</button>
                <button type="button" className="logout-button" onClick={handleLogout}>Logout</button>
            </form>
        </div>
    );
}

export default Game;
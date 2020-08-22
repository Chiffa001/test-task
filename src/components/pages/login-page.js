import React, {useState} from "react";

const LoginPage = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
                <label htmlFor="login">Login</label>
                <input type="text"
                       className="form-control"
                       id="login"
                       value={login}
                       onChange={({target}) => setLogin(target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={({target}) => setPassword(target.value)}/>
            </div>
            <button className="btn btn-primary" type="submit">Log in</button>
        </form>
    );
};

export default LoginPage;

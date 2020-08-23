import React, {useState} from "react";
import {withRouter} from "react-router-dom";

import {checkValidityPassword, compose} from "../../utils";
import {withService} from "../hoc";
import WarningList from "../warning-list";

let warningList = [];

const LoginPage = ({history, service}) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(null);

    const invalidClass = "is-invalid";
    const validClass = "is-valid";

    let clazz = "form-control";
    if (isValid === false) clazz += ` ${invalidClass}`;
    else if (isValid === true) clazz += ` ${validClass}`;

    const submitForm = (e) => {
        e.preventDefault();
        warningList = [...checkValidityPassword(password)];
        if (!warningList.length) {
            setIsValid(true);
            history.push("/a");
        }
        setIsValid(false);
    };
    service.getUser("Chiffa001").then(console.log);
    return (
        <form onSubmit={submitForm}>
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
                    className={clazz}
                    id="password"
                    value={password}
                    onChange={({target}) => setPassword(target.value)}/>
                <div className="invalid-feedback">
                    <WarningList warningList={warningList} />
                </div>
            </div>
            <button className="btn btn-primary" type="submit">Log in</button>
        </form>
    );
};

export default compose(withRouter, withService)(LoginPage);

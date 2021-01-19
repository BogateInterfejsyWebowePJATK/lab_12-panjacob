import React, {useState} from "react";
import {useInput} from "./hooks"

export default function LoginForm({usersData}) {

    const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    const [errors, setErrors] = useState({email: "", password: ""});
    const [showSuccess, setShowSucces] = useState(false);

    const [emailField, resetInputField] = useInput("");
    const [passwordField, resetPasswordField] = useInput("");

    const onSubmit = e => {
        e.preventDefault()
        const isEmailValid = emailRegex.test(emailField.value);

        if (isEmailValid) {
            const isEmailCorrect = Object.keys(usersData).includes(emailField.value);

            if (isEmailCorrect) {
                if (usersData[emailField.value].password !== passwordField.value) {
                    setErrors({password: "Provided password is incorrect."});
                } else {
                    setShowSucces(true);
                    setErrors({email: "", password: ""})
                    resetInputField()
                    resetPasswordField()
                }
            } else {
                setErrors({email: "Account with this e-mail address does not exist."});
            }
        } else {
            setErrors({email: "E-mail address is invalid."});
        }
    };

    return (
        <div className="container" style={{width: "300px"}}>
            <div className="row text-center">
                <div className="col-md-12">
                    <h1>Login</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={onSubmit}>
                        {showSuccess ? <div className="alert alert-success">Welcome!</div> : <></>}
                        <div className="form-group">
                            <input {...emailField} className="form-control" type="text" placeholder="email"
                                   required/>
                            <small style={{color: "red"}}>{errors.email}</small>
                        </div>
                        <div className="form-group">
                            <input  {...passwordField} className="form-control" type="password" placeholder="password"
                                    required/>
                            <small style={{color: "red"}}>{errors.password}</small>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
import React, {useState} from "react";
import {useInput} from "./hooks";

import ResultsTable from "./ResultsTable"

export default function Form() {
    const [isTable, setIsTable] = useState(false);

    const [firstname, setFirstname] = useInput("");
    const [lastname, setLastname] = useInput("");
    const [agreement1, setAgreement1] = useInput();
    const [agreement2, setAgreement2] = useInput("");
    const [hobby, setHobby] = useInput();


    const reset = () => {
        setFirstname()
        setLastname()
        setAgreement1()
        setHobby()
        setAgreement2()
        setIsTable(false)
    };

    const onSubmit = e => {
        e.preventDefault();
        setIsTable(true)
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <input {...firstname} className="form-control" type="text" placeholder="Firstname"
                                       required/>
                                <input {...lastname} className="form-control" type="text" placeholder="Lastname"
                                       required/>
                            </div>
                            <div className="form-group">
                                <label><input {...agreement1} id="radio" type="radio"
                                              value="True"/>&nbsp;Understood</label>
                            </div>

                            <div className="form-group">
                                <label><input {...agreement2} type="checkbox" value="True"/>&nbsp;Understood</label>
                            </div>
                            <div className="form-group">
                                <select {...hobby} className="form-control">
                                    <option value="IT">IT</option>
                                    <option value="Cooking">Cooking</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-primary" value="SEND"/>
                                <input type="reset" className="btn btn-secondary" onClick={reset} value="RESET"/>
                            </div>

                        </form>
                        {isTable ? <ResultsTable props={{
                            "firstname": firstname.value,
                            "secondname": lastname.value,
                            "agreement1": agreement1.value,
                            "hobby": hobby.value,
                            "agreement2": agreement2.value
                        }}/> : <></>}
                    </div>
                </div>
            </div>
        </>
    );
}
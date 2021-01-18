import React, {useState} from 'react';
import {UseInput} from "./Hooks";
import {Form, Button} from "react-bootstrap";


function NumberAverage() {
    const [number] = UseInput(0);
    const [numbers, setNumbers] = useState([]);

    function averageSum(arr) {
        if (!arr.length) {
            return 0;
        }
        return arr.reduce((prev, curr) => prev + curr) / arr.length;
    }

    function Sum(arr) {
        if (!arr.length) {
            return 0;
        }
        return arr.reduce((prev, curr) => prev + curr);
    }

    const submit = e => {
        e.preventDefault();
        let newNumbers = [...numbers];
        newNumbers.push(parseInt(number.value))
        setNumbers(newNumbers)
        console.log(numbers)
    };

    return (
        <div>
            <div>Average: {averageSum(numbers)} Sum: {Sum(numbers)}</div>
            <Form onSubmit={submit} className={"col-9"}>
                <input {...number} type="text" placeholder="Enter number"/>
                <Button type={"submit"} variant="outline-primary">Add</Button>
            </Form>
        </div>
    )
}

export default NumberAverage;
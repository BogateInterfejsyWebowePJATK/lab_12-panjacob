import React from "react";

export default function ResultsTable({props}) {
    return (
        <table className={"table"}>
            <tbody>
            {
                Object.keys(props).map((key, i) => {
                    return <tr key={i}>
                        <td>{key}</td>
                        <td><i>{props[key]}</i></td>
                    </tr>
                })
            }
            </tbody>
        </table>
    );
}
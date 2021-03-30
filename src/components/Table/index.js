import React from 'react'

const Table = (props) => {
    return (
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                <th scope="col">Gender</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                <th scope="col">State</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map(element => (
                    <tr>
                    <th scope="row">{element.gender}</th>
                    <td>{element.name.first}</td>
                    <td>{element.name.last}</td>
                    <td>{element.email}</td>
                    <td>{element.location.state}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;

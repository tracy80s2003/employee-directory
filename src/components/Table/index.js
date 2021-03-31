import React from 'react'

const Table = (props) => {
    return (
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                <th scope="col">Picture</th>
                <th scope="col">Gender</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Phone #</th>
                <th scope="col">Email</th>
                <th scope="col">State</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map(element => (
                    <tr>
                    <td>{element.picture.thumbnail.render}</td>
                    <td>{element.gender}</td>
                    <td>{element.name.first}</td>
                    <td>{element.name.last}</td>
                    <td>{element.phone}</td>
                    <td>{element.email}</td>
                    <td>{element.location.state}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;

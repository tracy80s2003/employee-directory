import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://randomuser.me/api/?results=100&nat=us")
      .then((res) => {
        setEmployees(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredEmployees(
      employees.filter((employee) =>
        employee.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, employees]);
  
  if (loading) {
    return <p>Loading employees...</p>;
  }

  return (
    <div className="App">
      <h1>Employee Lists</h1>
      <input
        type="text"
        placeholder="Search Employees"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredEmployees.map((employee, idx) => (
        <EmployeeDetail key={idx} {...employee} />
      ))}
    </div>
  );
}
  
const EmployeeDetail = (props) => {
  const { name } = props;
};
  
  
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


export default {
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=100&nat=us");
  }
};
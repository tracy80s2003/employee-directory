import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import Main from './pages/Main';
import axios from 'axios'


function App() {
  const [employee, setEmployee] = useState({})
  
useEffect(() => fetchEmployee(), [])

const fetchEmployee = async () => {
  const { data } = await axios(`https://randomuser.me/api/`)
  setEmployee(data)
}
  
  return (
    <>
    <Navbar />
    <Main { ...employee } />
    </>
  );
}

export default App;


import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import CostomNavbar from './Components/Navbar';
import Main from './Components/Main'; 
import Card from './Components/Card';
 const App=()=>{
    const name ='amel';
    const person={firstName:"wafi",lastName:"benjeddou",age:23};
    const {firstName,lastName,age}=person
    const table=[{name:"nathid",age:32},{name:"karim",age:32},{name:"tamlim",age:24}]
       return (
     <>
    {/*  {table.map((elt)=><h1>{elt.name}</h1>)} */}

    <CostomNavbar/>
    <Main/>
    <Card/>
    </>
   )
  
 }

      
       
    


export default App;

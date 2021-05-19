import React,{useState} from 'react'
import {Link } from "react-router-dom";
import Header from './Header'
import './index.css'


function Select() {
  const[num,setNum]=useState(1)
  const[name,setName]=useState("")
  
  return (
    <div>
    <div className="header">
      
    <Header />
    </div>
    <div>
    <form className="form">
      
      <label>Name</label>
      <input type="text"  value={name}
       onChange={e=>setName(e.target.value)}/>
       <br/>
       <label>Age</label>
       <input type ="text"/>
       <br/>
       <label>Favourite Color</label>
       <input type ="text"/>
       <br/>
       <label>Favourite game</label>
       <input type ="text"/>
       <br/>
       <label>Select a flower</label>
       <select  value={num} onChange={e=>setNum(e.target.value)}>
        <option value="1">Rose</option>
        <option value ="2">Lily</option>
        <option value="3">Jasmine</option>
        <option value="4">Marie gold</option>
        <option value="5">Tulip</option>
        <option value="6">Chrysanthemum</option>
      </select>
    
      
      {/*<button><a href="#">submit</a></button>*/}
      <br/>
      <button ><Link className="btn" to="/apple" >Know the facts</Link></button>
     
    </form>
    </div>
    </div>
  )
}

export default   Select



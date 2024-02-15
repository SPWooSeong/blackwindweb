'use client'
import { useEffect, useState } from "react";


async function register(name, email, id, password) {
  const res = await fetch('http://127.0.0.1:8000' + '/register', {
    method:'post',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name : name,
      email : email,
      id: id,
      password: password
    })
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  console.log(data);
  alert(data);
  return data;
}



export default function Register() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  

  return (
    <div>
      <h1 className="title">Register Page</h1>
      <div className="title">

        <label className="details" >Name : </label>
        <input type="text" name="Name" onChange={(a) => {
          setName(a.target.value);
        }} value={name}></input>
        <br></br>

        <label className="details" >Email : </label>
        <input type="text" name="Email" onChange={(b) => {
          setEmail(b.target.value);
        }} value={email}></input>
        <br></br>

        <label className="details" >ID : </label>
        <input type="text" name="ID" onChange={(c) => {
          setId(c.target.value);
        }} value={id}></input>
        <br></br>

        <label className="details" >Password : </label>
        <input type="text" name="Password" onChange={(d) => {
          setPassword(d.target.value);
        }} value={password}></input>
        <br></br>

        <input className="submit" type="submit" value="Done" onClick={() => {
          register(name, email, id, password);
        }}></input>
      </div>

    </div>
  );
}


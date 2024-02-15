'use client'
import { useEffect, useState } from "react";
import Link from "next/link";

async function login(id, password) {
  const res = await fetch('http://127.0.0.1:8000' + '/login', {
    method:'post',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
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


export default function Home() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1 className="title">Login Page</h1>
      <div className="title">

        <div>{id}</div>

        <label className="details" >ID : </label>
        <input type="text" name="ID" onChange={(e) => {
          setId(e.target.value);
        }} value={id}></input>
        <br></br>

        <label className="details" >Password : </label>
        <input type="text" name="Password" onChange={(a) => {
          setPassword(a.target.value);
        }} value={password}></input>
        <br></br>

        <input className="submit" type="submit" value="login" onClick={() => {
          login(id, password);
        }}></input>
        <button>
          <a href="/register">register</a>
        </button>
        
        
      </div>

    </div>
    
  );
}


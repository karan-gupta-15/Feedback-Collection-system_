import React, { useState } from 'react';
import './Style.css';

export default function Form() {

    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [text, setText]=useState("");

    const collectData=async (e) => {
        e.preventDefault();
        let result = await fetch('http://localhost:4000/',{
            method:'post',
            body:JSON.stringify({name,email,text}),
            headers:{
                'Content-Type':'application/json'
            },
        });
        result =await result.json;
        localStorage.setItem("user",JSON.stringify(result));
    }
    
  return (
    <div className='container'>
        <form onSubmit={collectData}> 
        <h2 className='text-center pt-3'> Feedback FORM </h2>
        <div className='mb-3 mt-3'>
            <label className='form-label'> Username</label>
            <input type='text' className='form-control'
            value={name}
            onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='mb-3'>
            <label className='form-label'> Email Address </label>
            <input type='email' className='form-control'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='mb-3'>
            <label className='form-label'> Message</label>
            <input type='text' className='form-control'
            value={text}
            onChange={(e)=>setText(e.target.value)}/>
        </div>
        <button type='submit' className='btn btn-success'> Submit</button>
        </form>
    </div>
  )
}

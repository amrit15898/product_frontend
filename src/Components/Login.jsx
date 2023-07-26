import axios from 'axios'
import React, {useState } from 'react'
import '../App.css'
export default function Login() {
    const submitHandler = (event) => {
        event.preventDefault();
        const username = event.target.name.value 
        const password = event.target.password.value 
        
        axios.post("http://127.0.0.1:8000/api/token/", {username, password})
        .then(response => {
            console.log(username)
            console.log(password)
            localStorage.setItem("token", response.data.access)
        }).catch(error => {
            console.log(error)

        })
    }
  return (
    <div>
        <form action="" onSubmit={submitHandler}>
            <p className='flex form-field'>
                <label htmlFor="">Name</label>
                <input type="text"  name="name" id="" />


            </p>
            <p className='flex form-field'>
                <label htmlFor="">Password</label>
                <input type="text"  name="password" id="" />


            </p>
            
            <p>
                <button className='btn' type='submit' >Login</button>
            </p>
        </form>
        
    </div>
  )
}

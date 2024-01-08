import React from 'react'
import style from './Form.module.css';
import axios from 'axios';
import { useState } from 'react';
const Form = () => {
    const [name, setName] =useState("");
    const [data, setData] =useState([]);
    
    async function submit(e) {
        e.preventDefault();
        console.log("submitted");
        try {
            const response = await axios.post("http://localhost:8000/sendData", {
                name
            });
            setData(response.data);
        } catch (e) {
            console.log(e);
        }
    }
    
  return (
    <div className={style.mainDiv}>
        <h1>Fill this form to connect!</h1>
        <form onSubmit={submit}>
            <lable>Name</lable>
            <input placeholder='Enter your name' onChange={(e) => {setName(e.target.value)}} type='text' name='name' />
            <input type="submit" />
        </form>
        {
            data.map((e)=>(
                <p>{e.name}</p>
            ))
        }
    </div>
  )
}

export default Form

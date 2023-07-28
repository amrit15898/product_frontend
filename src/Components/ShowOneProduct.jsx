import React, { useEffect, useState } from 'react'
import hulk from '../Images/gettyimages-867191380-612x612.jpg'
import '../App.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
export default function ShowOneProduct() {
    const {id} = useParams();
    const [data , setData] = useState([])
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/show-one-product/"+id)
        .then((response) => {
            console.log()
            console.log(response.data)
            setData(response.data)
        
        })
        .catch((error)=> {
            console.log(error)
        })
    },[])
  return (
    <div>
        <div className="content-div flex">
            <img src = {data.image}/>
            <h3>Name: {data.name} </h3>
            <h2>Price : <b>{data.price}</b></h2>
            <div>
            <button className='btn'>Pay</button>
            <button className='btn'>Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

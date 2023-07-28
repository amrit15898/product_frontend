import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../App.css'
import { Link } from 'react-router-dom'
export default function ShowProduct() {
    
    const [data, setData] = useState([])
    const [loading , setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const token =localStorage.getItem("token")
        console.log(token)
        axios.get("http://127.0.0.1:8000/post-product", {
            headers : {
                Authorization : `Bearer ${token}`

            }
        })
    .then(response => {
        console.log(response.data.data)
        setData(response.data.data)
        setLoading(false)
    }).catch(error => {
        console.log(error)
        setError(error)
    })
    },[])
    if(loading){
        return <div>
            Loading ...

        </div>
    }

    if (error) {
        return <div>
            Error: {error.message}
        </div>
    }
    const cardStyle = {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        // padding: '20px',
        // margin: '10px',
        borderRadius: '4px',
        backgroundColor: '#fff',
      };
  return (
    <div className='container'>
        <h1>Product</h1>
        <div className="card-div">
            {
                data.map((item, index) => (
                    <div className="card"  style={cardStyle}>
                <img src={"http://127.0.0.1:8000"+item.image} alt="" srcset="" />
                <h3><b>Price:</b> {item.price}</h3>
                <h2>{item.name}</h2>

                <Link to={`/show-one/${item.id}`} className="btn">Buy</Link>

            </div>
                ))
            }
        </div>
    </div>
  )
}

import '../App.css'
import axios from 'axios';
import React , {useEffect, useState} from 'react';

function Product(){
    const [productName, setProductName] = useState("")
    const [image, setImage] = useState(null)
    const handleCallApi = () => {
        const apiurl = "http://127.0.0.1:8000/post-product"
        const formData = new FormData()
        formData.append("name" , productName)
        formData.append("image" , image)
        axios.post(apiurl, formData)
        .then(response => {
            console.log("response.data")

        }).catch(error => {
            console.error(error)
            
        })

    }
   
    return (    
        <>
        <div className="container">
            <form action="" className='form flex'>
                <p>
                    <label htmlFor="">Product name</label>
                    <br />
                    <input type="text" value={productName} onChange={e => setProductName(e.target.value)} />

                </p>
                <p>
                    <label htmlFor="">Image</label>
                    <br />
                    <input type="file" name="" onChange={e => setImage(e.target.files[0])} id="" />

                </p>
                <p>
                    <button type="submit" onClick={handleCallApi}>Submit</button>
                </p>
            </form>
        </div>
        </>
    )
}

export default Product;

import React from 'react'
import spiderMan from '../Images/spiderman.jpg'
import captain from '../Images/captain.jpg'
import hulk from '../Images/gettyimages-867191380-612x612.jpg'
import '../App.css'
import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <div className='main-div'>
        <h1>Marvel Heros</h1>
        <div className="container flex">
            <div className="card flex">
                <img src={spiderMan} alt="" srcset="" />
                <h3>SpiderMan</h3>
            </div>
            <Link to='/hulk'>
            <div className="card flex">
                <img src={hulk} alt="" srcset="" />
                <h3>Hulk</h3>

            </div>
            </Link>
            <div className="flex card">
                <img src={captain} alt="" srcset="" />
                <h3>Captain America</h3>
            </div>
        </div>
    </div>
  )
}

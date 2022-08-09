import React from 'react'
import "../styles/Navbar.css"
// import logo from '../data/data.json'
import {Link} from 'react-router-dom'

const logo1 = "https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg"
const Navbar = () => {
  return (
    <div className='nav'>
       <div className='logo'>
       <Link to="/">
            <img id='logoImage' src={logo1} alt='not' />
        </Link>
       </div>
    </div>
  )
}

export default Navbar
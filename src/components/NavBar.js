import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Sass/index.scss'
import ComputerIcon from '@mui/icons-material/Computer';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ConstructionIcon from '@mui/icons-material/Construction';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const NavBar = () => {
    const [show,setShow]=useState(false)
    
   const navShow=()=>setShow(prev=>!prev)

    return (
        <div className='navBarContainer'>
            <div className='logoContainer'>
                <h1 className="logo">ADHARSH</h1>
            </div>
            <a href="#" className='toggleBtn' onClick={navShow}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className={show?"navContainer active":"navContainer"}>
                <ul>
                    <li>
                        <Link to='/' onClick={navShow}>
                            <HomeIcon />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about' onClick={navShow}>
                            <MenuBookIcon />
                            about
                        </Link>
                    </li>
                    
                    <li>
                        <Link to='/projects' onClick={navShow}>
                            <ConstructionIcon />
                            projects
                        </Link>
                    </li>
                    <li>
                        <Link to='/contactMe' onClick={navShow}>
                            <PhoneInTalkIcon />
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar

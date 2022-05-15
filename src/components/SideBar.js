import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import { IconButton } from '@mui/material';

const SideBar = () => {
    return (
        <div className='sidebar'>
        
        <IconButton className='sidebarBtn' >
        
        </IconButton>
        <IconButton className='sidebarBtn'>
        <LinkedInIcon />
            </IconButton>
            <IconButton className='sidebarBtn'>
             
            <GitHubIcon />
            </IconButton>
            <IconButton className='sidebarBtn'>
             
            <EmailIcon/>
            </IconButton>
         
        </div>
    )
}

export default SideBar

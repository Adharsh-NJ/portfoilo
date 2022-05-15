import React from 'react'
import image from'../../images/profile-pic.JPG'
import reactImg from '../../images/React-icon.svg.png'
import nodeImg from '../../images/node-js-1174925.webp'
import jsImg from '../../images/javascript.svg'
import sassImg from '../../images/sass.svg'
import cssImg from '../../images/css.png'
import mongoImg from '../../images/mongodb.svg'
import git from '../../images/git.svg'
import redux from '../../images/redux.svg'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='center-img'>
            <img src={image} alt="" />
            </div>
            <ul>
              <li>
                <div><img src={reactImg} alt="" /></div>
                <p>React</p>
              </li>
              <li>
              <div>  <img src={nodeImg} alt="" /></div>
                <p>Node</p>
              </li>
              <li>
               <div> <img src={jsImg} alt="" /></div>
                <p>Javascript</p>
              </li>
              <li>
               <div> <img src={sassImg} alt="" /></div>
                <p>Sass</p>
              </li>
              <li>
               <div> <img src={cssImg} alt="" /></div>
                <p>css</p>
              </li>
              <li>
               <div> <img src={mongoImg} alt="" /></div>
                <p>mongoDB</p>
              </li>
              <li>
                <div><img src={git} alt="" /></div>
                <p>Git</p>
              </li>
              <li>
                <div><img src={redux} alt="" /></div>
                <p>Redux</p>
              </li>
            </ul>
        </div>
    )
}

export default Home

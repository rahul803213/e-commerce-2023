import React from 'react'
import {Link} from 'react-router-dom'
import './footer.styles.scss'


const footer = () =>  (
 
  <div className='parent-footer'>

{/* first footer */}
    <div className='first-child'>
      <Link to='/' className='Link'>Back to top</Link>
    </div>

{/* second footer */}
    <div className="second-child">
      <div className="column">
        <h5>Get to know us</h5>
        <span><Link to='/' className='Link'>About Us</Link></span>
        <span><Link to='/' className='Link'>Careers</Link></span>
        <span><Link to='/' className='Link'>Press Release</Link></span>
      </div>

      <div className="column">
        <h5>Connect with Us</h5>
        <span><Link to='/' className='Link'>Twitter</Link></span>
        <span><Link to='/' className='Link'>Facebook</Link></span>
        <span><Link to='/' className='Link'>Instagram</Link></span>
        <span></span>
      </div>

      <div className="column">
        <h5>Make Money with Us</h5>
        <span><Link to='/' className='Link'>Sell on our site</Link></span>
        <span><Link to='/' className='Link'>Advertise Your Products</Link></span>
        <span><Link to='/' className='Link'>Become an Affiliate</Link></span>
        <span><Link to='/' className='Link'>Protect and Build Your Brand</Link></span>
      </div>

      <div className="column">
        <h5>Let us help you</h5>
        <span><Link to='/' className='Link'>Your Account</Link></span>
        <span><Link to='/' className='Link'>Return Center</Link></span>
        <span><Link to='/' className='Link'>100% Purchase Protection</Link></span>
        <span><Link to='/' className='Link'>Help</Link></span>
      </div>

    </div>

    {/* third footer */}
    <div style={{textAlign: 'center', padding:'0.7rem',borderTop:'0.01rem solid white', marginTop:'1rem'}}>
      <span>&copy;&nbsp;{new Date().getFullYear()} developed by Students</span>
    </div>
  </div>  
  
  )





export default footer
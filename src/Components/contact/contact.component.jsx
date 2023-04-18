import React from 'react'
import './contact.styles.scss'
import {Link} from 'react-router-dom'
import {IoIosCall} from 'react-icons/io'
import {IoHome} from 'react-icons/io5'
import {FaInfo} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const contact = () => {
  return (
  <>
    <div className="family">
        {/* first child is map of store location  */}
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7217.191747473915!2d87.04385559999996!3d25.2505331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1679485729198!5m2!1sen!2sin" 

            height="400" 
            width="100%"
            style={{border:'0'}} allowFullScreen={true} title="map" loading="eager" 
            referrerPolicy="no-referrer-when-downgrade"  ></iframe>
      </div>

      {/* information box */}
      <div className="infoBox">
        {/* first box */}
        <div className="column">
            <form action="post">
                <input type="text" name="Name" id="" placeholder="Name"/>
                <input type="email" name="Email" id="" placeholder="Email"/>
                <input type="tel" name="PhoneNo" id="" placeholder="Phone No" />
                <textarea name="Comment" id="" cols="50" rows="3" placeholder="Comment here..." wrap='hard' style={{resize:'vertical'}}></textarea>
                <input type="submit" value="Submit"/>
            </form>
        </div>

        {/* second box */}
        <div className="column">
            <h4>Get In Touch With Us</h4>
            <div className="Links">
                <Link to='/' className="Link"><IoHome/> &nbsp; Sabour, Bhagalpur, 813210 </Link>
                <Link to='tel:+91 1234567890' className="Link"><IoIosCall/> &nbsp; (+91) 1234567890</Link>
                <Link to='mailto: demo@company.com' className="Link"><MdEmail/> &nbsp; demo&#x40;company.com</Link>
                <p className="Link"><FaInfo/> &nbsp; Monday-Friday 10AM-8PM</p>
            </div>
        </div>

      </div>
    </div>
  </>

  )
}

export default contact;

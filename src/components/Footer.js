import React from 'react'
import logo from '../assets/Logo .svg'

const Footer = () => {
  return (
    <div>
      <footer>
        <section>
          <div className='company-info'>
            <img src={logo} alt="logo"/>
            <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
          </div>
          <div>
            <h3>Important Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Menu</a></li>
              <li><a href="/">Reservations</a></li>
              <li><a href="/">Order Online</a></li>
              <li><a href="/">Reservations</a></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>Address: 333 New York Street, USA</li>
              <li>Phone: +00 123 456 789</li>
              <li>email: little@lemon.com</li>
            </ul>
          </div>
          <div>
            <h3>Social Media Links</h3>
            <ul>
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">Twitter</a></li>
            </ul>
            </div>
        </section>
      </footer>
    </div>
  )
}

export default Footer
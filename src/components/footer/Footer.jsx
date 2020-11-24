import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../button/Button'

import './Footer.css'

export default function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join The Adventure
                </p>
        <p className="footer-subscription-text">
          You Can Unsubscribe At Any Time.
                </p>
        <div className="input-area">
          <form action="">
            <input type="email" name='email' placeholder='your email' className='footer-input' />
            <Button buttonStyle='btn-outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to='/'>One</Link>
            <Link to='/'>Two</Link>
            <Link to='/'>Three</Link>
          </div>
          <div className="footer-link-items">
            <h2>Support</h2>
            <Link to='/'>One</Link>
            <Link to='/'>Two</Link>
            <Link to='/'>Three</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Products</h2>
            <Link to='/'>One</Link>
            <Link to='/'>Two</Link>
            <Link to='/'>Three</Link>
          </div>
          <div className="footer-link-items">
            <h2>Sign Up</h2>
            <Link to='/'>One</Link>
            <Link to='/'>Two</Link>
            <Link to='/'>Three</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo">
              SITES CAFE <i className="fas fa-laptop-code" />
            </Link>
          </div>
          <small className="website-rights">SITES CAFE &#169; 2020</small>
            <div className="social-icons">
              <Link className="social-icon-link facebook" to='/' target='_blank' area-label='Facebook'>
                <i className="fab fa-facebook-f" />
              </Link>
              <Link className="social-icon-link instagram" to='/' target='_blank' area-label='Instagram'>
                <i className="fab fa-instagram" />
              </Link>
              <Link className="social-icon-link youtube" to='/' target='_blank' area-label='Youtube'>
                <i className="fab fa-youtube" />
              </Link>
              <Link className="social-icon-link twitter" to='/' target='_blank' area-label='Twitter'>
                <i className="fab fa-twitter" />
              </Link>
              <Link className="social-icon-link linkedin" to='/' target='_blank' area-label='Linkedin'>
                <i className="fab fa-linkedin" />
              </Link>
            </div>
        </div>
      </section>
    </div>
  )
}

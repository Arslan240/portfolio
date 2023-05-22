import React, { useState } from 'react'
import './Footer.scss'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { name, email, message } = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name,
      email,
      message
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <a href="mailto:arslan.jamil1322@gmail.com">
          <div className="app__footer-card" >
            <img src={images.email} alt="email" />
            <a href="mailto:arslan.jamil1322@gmail.com" className='p-test'>arslan.jamil1322@gmail.com</a>
          </div>
        </a>
        <a href="tel:+923015990455">
          <div className="app__footer-card">
            <img src={images.mobile} alt="mobile" />
            <a href="tel:+923015990455" className='p-test' style={{ textDecoration: 'none' }}>+92 301 599 0455</a>
          </div>
        </a>
        <a href="tel:+923015990455" style={{ textDecoration: 'none' }}>Phone Number</a>
      </div>
      {!isFormSubmitted ?
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input type="text" className="p-text" placeholder='Your name'
              name='name'
              value={name}
              onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input type="email" className="p-text" placeholder='Your Email'
              name='email'
              value={email}
              onChange={handleChangeInput} />
          </div>

          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              value={message}
              name='message'
              onChange={handleChangeInput}
            />
          </div>
          <button
            type='button'
            className='p-text'
            onClick={handleSubmit}
          >{loading ? 'Sending Message' : 'Send Message'}</button>
        </div>
        : <div className="head-text">Thank you for getting in touch</div>
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
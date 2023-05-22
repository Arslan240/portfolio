import React, { useState, useEffect } from 'react'
import './About.scss'
import { motion } from 'framer-motion'

import AppWrap from '../../wrapper/AppWrap'
import { MotionWrap } from '../../wrapper'
import {urlFor,client } from '../../client'



const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query)
      .then(data => setAbouts(data))
  }, [])

  return (
    <div>
      <h2 className='head-text'>
        I know that <span>Good Apps</span> means <span>Good Business</span>
      </h2>
      <div className='app__profiles'>
        {
          abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              initial={{ boxShadow: 0 }}
              className='app__profile-item'
              key={about.title + index}
            >
              <motion.img
                src={urlFor(about.imgUrl)}
                alt={about.title}
                whileHover={{boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)"}}
              />
              <h2 className="bold-text mt-20">{about.title}</h2>
              <p className='p-text mt-10'>{about.description}</p>
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app_whitebg'
)
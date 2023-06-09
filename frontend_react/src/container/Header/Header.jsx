import React from 'react'
import { motion } from 'framer-motion'
import './Header.scss'
import { images } from '../../constants'
import AppWrap from '../../wrapper/AppWrap'

const scaleVariants = {
  whileInView: [0,1],
  opacity:[0,1],
  transition: {
    duration: 1,
    ease: 'easeInOut'
  }
}

const skills = [images.flutter,images.redux,images.sass]

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div className='badge-container'>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Arslan</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
              <p className='p-text'>Web Developer</p>
              <p className='p-text'>Freelancer</p>

          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{opacity:[0,1]}}
        transition={{duration:0.5, delayChildren:0.5}}
        className='app__header-img-container'
      >
        <motion.img
          whileInView={{scale:[0,1]}}
          transition={{duration:0.5, ease: 'easeInOut'}}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        />
        <img src={images.profile} alt="profile_bg" className='app__header-img'/>
      
      </motion.div>
      
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {/* {
          skills.map((circle, index) => (
            <div className='circle-smp app__flex' key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          ))
        } */}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')
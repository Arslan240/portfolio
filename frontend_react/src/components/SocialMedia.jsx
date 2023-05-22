import React from 'react'
import {BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsTwitter cursor={"pointer"}/>
        </div>
        <div>
            <FaFacebookF cursor={"pointer"}/>
        </div>
        <div>
            <BsInstagram cursor="pointer"/>
        </div>
    </div>
  )
}

export default SocialMedia
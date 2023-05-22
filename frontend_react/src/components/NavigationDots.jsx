import React from 'react'
import { navItems } from './Navbar/Navbar'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
        {
            navItems.map((item,index) => (
                    <a 
                    key={item+index}
                    href={`#${item}`} 
                    className='app__navigation-dot'
                    style={active === item ? {backgroundColor: '#313BAC'}: {}}
                    />
            ))
        }
    </div>
  )
}

export default NavigationDots
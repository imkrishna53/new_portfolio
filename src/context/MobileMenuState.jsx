import React, { useState } from 'react'
import MobileMenuContext from './MobileMenuContext'

export const MobileMenuState = (props) => {
    const [mobileMenuObj, setMobileMenuObj] = useState(null);
    const toggleMenu = (toggle) => {
        localStorage.setItem('mobileMenu', toggle);   
        setMobileMenuObj({
            mobileMenu: localStorage.getItem('mobileMenu')
        })
    }

    
  return (
    <MobileMenuContext.Provider value={{mobileMenuObj, toggleMenu}}>
        {props.children}
    </MobileMenuContext.Provider>
  )
}

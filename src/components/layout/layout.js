import React from 'react'
import Navbar from '../Navbar/navbar';
import Footer from '../footer/footer';
import './layout.css'




const Layout = ({children}) => {
   

    return (
        <div className='outerContainer'>
        
        <div className='nav'>
            <Navbar/>
        </div>
        <div className='betweenContAndFooter'>
        <div className='content'>
            {children}
        
        </div>
        <div className='footer'>
        <Footer/>
        </div>
            
         </div> 
         </div>  
        
        
        
    )
}

export default Layout

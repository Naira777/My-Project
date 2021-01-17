import React from 'react';
import s from './Header.module.css';
import earth2 from '../../Photo/earth2.jpg';

const Header = () => {
   
 
   return <header className={s.header}>
      
       <img src={earth2} className={s.foto} />               


   
    </header>  


    
}




export default Header;

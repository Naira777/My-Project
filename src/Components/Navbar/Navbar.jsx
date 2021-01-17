import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

   return  <nav className={s.nav}>
   <div className={s.item}> 
  <NavLink to="/astronomypictureoftheday" activeClassName={s.activeLink}> Astronomy picture  </NavLink>
   </div >
   <div className={s.item}> 
  <NavLink to="/weatherofCity" activeClassName={s.activeLink}> Weather by City </ NavLink>
   </div>
                 
  <div className={s.item}> 
  <NavLink to="/aztro" activeClassName={s.activeLink}> Horoscope </ NavLink>
   </div>

 

</nav>
}


export default Navbar;

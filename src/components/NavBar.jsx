import React from 'react'
import brand from '../images/logo.svg';
import subLinks from '../data';
import {GetContext} from '../ContextApi';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {

  const{openSubMenu,closeSubMenu,openMobMenu} = GetContext();
 
  const displaySubmenu = (e) => {
    let text = e.target.innerText;
    let position = e.target.getBoundingClientRect();
    let left = position.left;
    let right = position.right;
    let center = (right + left)/2;
    let bottom = position.bottom;
    console.log(text,{center,bottom});
    openSubMenu(text,{center,bottom});
  }

  const handleSubMenu = (e) => {
    if(!e.target.classList.contains('link_btn')){
      closeSubMenu();
    }
  }


  return (
    <nav>
      <section className='topNav' onMouseOver={(e)=>handleSubMenu(e)}>
        <div className='stripe_logo'>
          <img src={brand} alt='stripe logo'/>
        </div>
        <div className='nav_links_container'>
            {subLinks.map((link,index)=>{
              return (
                <li key={index} className='link_btn' onMouseOver={(e)=>displaySubmenu(e)}>{link.page}</li>
              )
            })}   
        </div>
        <button className='signIn'>Sign in</button>
        <button className='hamburger_icon' onClick={()=>openMobMenu()}><FaBars/></button>
      </section>
    </nav>
  )
}

export default NavBar
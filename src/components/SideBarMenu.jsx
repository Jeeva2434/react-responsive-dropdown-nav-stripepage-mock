import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { GetContext } from '../ContextApi'
import subLinks from '../data';

const SideBarMenu = () => {
  const {mobMenuOpen,closeMobMenu} = GetContext();
  

  return (
    <section className={`${mobMenuOpen ? 'showSideBar':'' } sideBarMenu`}>
       <aside className='sideBar_links'>
          <header className='sideBar_header'>
            <h4>Stripe</h4>
            <div className='close_icon' title='close icon'
            onClick={closeMobMenu}>
              <FaTimes/>
            </div>
          </header>
          <div className='mobMenu'>
            {subLinks.map((link,index)=>{
              return (
                <>
                  <h4>{link.page}</h4>
                  <div className='subListItems'>
                    {link?.links.map((subItem,i)=>{
                      return (
                        <li key={i}>
                          <span>{subItem.icon}</span>
                          <span>{subItem.label}</span>
                        </li>
                      )
                    })}
                  </div>
                </>
              )
            })}
          </div>
       </aside>
    </section>
  )
}

export default SideBarMenu
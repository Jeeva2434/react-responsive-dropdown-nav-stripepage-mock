import React,{useEffect, useRef} from 'react'
import {GetContext} from '../ContextApi';


const SubMenu = () => {

  const{isSubMenuOpen,location,page} = GetContext();

  const container = useRef('');
  const subMenu = container.current;
  
  useEffect(()=>{
    if(isSubMenuOpen){
      const{center,bottom} = location;
      subMenu.style.left = `${center}px`; 
      subMenu.style.top = `${bottom}px`;   
    }
  },[page,location,isSubMenuOpen,subMenu]);

  return (
    <section className={`${isSubMenuOpen ? 'showSuBMenu':''} subMenuContainer` } ref={container}>
      <div className='subMenuItem'>
        <h4>{page.page}</h4>
        <div className='subMenuItem_list'>
          {page.links.map((link,i)=>{
            return (
              <li key={i}>
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </li>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SubMenu;
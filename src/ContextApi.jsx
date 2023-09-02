import React, { createContext, useContext, useState } from 'react'
import subLinks from './data';

const StripeContext = createContext();

const ContextApi = ({children}) => {

    const[isSubMenuOpen,setIsSubMenuOpen] = useState(false);
    const[page,setPage] = useState({
                            page:'',
                            links:[]
                        });
    const[location,setLocation] = useState({});
    const[mobMenuOpen,setMobMenuOpen] = useState(false);

    const openSubMenu = (text,coordinates) => {
        subLinks.filter((item)=>{
            if(item.page === text){
                setPage(item);
                setIsSubMenuOpen(true);
                setLocation(coordinates);
                return true;
            }else{
                return false;
            }
        })     
    }

    const closeSubMenu = () => {
        setIsSubMenuOpen(false);
    }

    const openMobMenu = () => {
        setMobMenuOpen(true);
    }

    const closeMobMenu = () => {
        setMobMenuOpen(false);
    }

    return (
        <StripeContext.Provider 
        value={{
            isSubMenuOpen,
            setIsSubMenuOpen,
            page,
            setPage,
            location,
            setLocation,
            openSubMenu,
            closeSubMenu,
            mobMenuOpen,
            setMobMenuOpen,
            openMobMenu,
            closeMobMenu
        }}>
            {children}
        </StripeContext.Provider>
    )
}

export const GetContext = () => {
    return useContext(StripeContext);
}

export default ContextApi
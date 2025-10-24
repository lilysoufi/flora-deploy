 import { NavLink } from "react-router-dom"
import './Navbar.css'
import { useState } from "react";

interface Navbarprops {
   logo : string ;
   logoName : string ;
   navlink1 : string ;
   navlink2 : string ;
   navlink3 : string ;
   navlink4 : string ;
   navlink5 : string ;
   navlinklogin : string ;
   hamburgerImage : string ;
   closeTag: string 

}

const Navbar = ({logo , logoName , navlink1 , navlink2 , navlink3 , navlink4 , navlink5 , navlinklogin , hamburgerImage , closeTag} : Navbarprops) => {
  const [open , setOpen] = useState<boolean>(false)
  
   return (
    <section className="nav-background">
    <nav className="navbar">
        <div className="navbar-logo">
           <img src={logo}></img>
           <img src={logoName}></img>
        </div>
        
       

        <div className="navbar-navigations">
           <NavLink to="/" >{navlink1}</NavLink>
            <NavLink to="/" >{navlink2}</NavLink>
            <NavLink to="/" >{navlink3}</NavLink>
            <NavLink to="/" >{navlink4}</NavLink>
            <NavLink to="/" >{navlink5}</NavLink>
          
        </div >
         <div className="navbar-login">
            <NavLink to="/" >{navlinklogin}</NavLink>
         </div>

      

         <div className="navbar-hamburger">
            <img src={hamburgerImage} alt="Menu" onClick={() => setOpen(!open)}></img>

        
          
          <div className="sub">
         <div className={open ? "subnavOpen" : "subnavClose"}>
              
              <div className="subnav-header">
              <div className="navbar-logo">
                <img src={logo}></img>
                <img src={logoName}></img>
                </div>

                <img id="x" src ={closeTag} onClick={() => setOpen(!open)}></img>
                </div>

                <div className="subnav-navigations">
                <NavLink id="home" to="/" >{navlink1}</NavLink>
                <NavLink to="/" >{navlink2}</NavLink>
                <NavLink to="/" >{navlink3}</NavLink>
                <NavLink to="/" >{navlink4}</NavLink>
                <NavLink to="/" >{navlink5}</NavLink>
                </div>

                <div className="subnav-login">
                   <NavLink to="/" >{navlinklogin}</NavLink>
                </div>


         </div>
         </div>
         </div>

    </nav>
    </section>
  )
}

export default Navbar

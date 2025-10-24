import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar'
import './Header.css'


const Header = () => {
      let apartmentData = [
    {
      image : "./images/location.png" ,
      title : "Location" ,
      desc : "Ahmedabad, India"
    }
    ,
    {
      image : "./images/dollar-circle.png" ,
      title : "Price" ,
      desc : "$1000 - $10,000"
    }
    ,
    {
      image : "./images/house.png" ,
      title : "Type of Property" ,
      desc : "Apartment"
    }
  ]
    return (
        <div className='header'>
          <Navbar 
          logo = "./images/Vector.png"
          logoName="./images/Flora.png"
          navlink1='Home'
          navlink2='About'
          navlink3='Service'
          navlink4='New Property'
          navlink5='Contact'
          navlinklogin='Login'
          hamburgerImage="./images/Group (1).png"
          closeTag="./images/Group (3).png"
          />
          <Hero 
           title="Discover a place you will love to live"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque." 
            apartmentInfo={apartmentData}
          />
        </div>
    )
}

export default Header 


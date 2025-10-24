import './Hero.css'

export interface ApartmentInfo { image :  string ; title : string , desc : string}

export interface HeroProps {title : string , description : string , apartmentInfo : ApartmentInfo[] }



const Hero = ({title , description , apartmentInfo} : HeroProps) => {
  return (
    <div className="hero-container">

    <div className="hero-left">

     <div className='hero-left-title'>
      <h1>{title}</h1>
      <p>{description}</p>
      </div>
      
      <div className="hero-info">
      {apartmentInfo.map((info) => {
        return (
           
        <div className='hero-info-section'>
          <div className='hero-info-section-logo'>
                <img src={info.image}></img>
            </div>
            <div className='hero-info-section-title'>
            <h5>{info.title}</h5>
            <p>{info.desc}</p>
        </div>
        </div>
        
        )
      })}
      </div>
       
        


     {/*} <div className="hero-info">
        <div className='hero-info-section'>
            <div className='hero-info-section-logo'>
                <img src="./images/location.png"></img>
            </div>
            <div className='hero-info-section-title'>
            <h5>Location</h5>
            <p>Ahmedabad, India</p>
            </div>
        </div>

        <div className='hero-info-section'>
            <div className='hero-info-section-logo'>
            <img src="./images/dollar-circle.png"></img>
            </div>
            <div className='hero-info-section-title'>
            <h5>Price</h5>
            <p>$1000 - $10,000</p>
            </div>
        </div>

        <div className='hero-info-section'>
            <div className='hero-info-section-logo'>
            <img src="./images/house.png"></img>
            </div>
            <div className='hero-info-section-title'>
            <h5>Type of Property</h5>
            <p>Apartment</p>
            </div>
        </div>
      </div>*/}
    </div>
   </div>
  )
}

export default Hero

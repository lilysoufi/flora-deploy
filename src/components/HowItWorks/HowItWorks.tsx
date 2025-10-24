import './HowItWorks.css'
import type { HeroProps } from '../Hero/Hero'

/*interface HitCardprops {
   backgroundImage : string;
   title : string;
   desc : string;
}

interface HITprops {
  title : string ;
  description : string ;
  hitCardprops : HitCardprops ;
}*/

const HowItWorks = ({title , description , apartmentInfo} : HeroProps) => {
    
    return (
    <div className='hiw-container'>
        <div className='hiw-title'>
        <h2>{title}</h2>
        <p>{description}</p>
        </div>


         <div className="hiw-info">
      {apartmentInfo.map((info) => {
        return (
           
        <div className='hiw-info-section'>
          <div className='hiw-info-section-logo'>
                <img src={info.image}></img>
            </div>
            <div className='hiw-info-section-title'>
            <h5>{info.title}</h5>
            <p>{info.desc}</p>
        </div>
        </div>

      
        
        )
      })}
      </div>

    </div>
  )
}

export default HowItWorks

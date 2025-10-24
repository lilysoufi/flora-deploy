import './Footer.css'

export interface FooterSummary {
     title : string ;
     subsection1 : string ,
     subsection2 : string ,
     subsection3 : string ,
     subsection4 :string 
}

export interface Footerprops {
    logo : string ;
    logoName : string ;
    desc : string ;
    footerSummary : Array<FooterSummary>;
    faceLogo : string ;
    xlogo : string ;
    linkedinlogo : string;
    copyright : string ;
    terms : string ;
    privacy : string

}


const Footer = ({logo , logoName , desc , footerSummary , faceLogo ,xlogo ,linkedinlogo ,copyright , terms , privacy} : Footerprops) => {

    return (
    <div className='footer-container'>
        <div className='footer-top'>
       
       <div className='footer-right'>
      <div className='footer-logo'>
        <img src={logo}></img>
        <img src= {logoName}></img>
      </div>
      <p id='f-para'>{desc}</p>
      </div>
      
      <div className='summarry-logos'>
      <div className='summary-container'>
        {footerSummary.map((data) => {
          return (
            <div  className='summary'>
                <h6>{data.title}</h6>
                <p>{data.subsection1}</p>
                 <p>{data.subsection2}</p>
                 <p>{data.subsection3}</p>
                 <p>{data.subsection4}</p>
            </div>
          )
        })}
      </div>
       
          <div className='social-logos'>
             <img id='face' src={faceLogo}></img>
             <img src={xlogo}></img>
            <img src={linkedinlogo}></img> 
         </div>

         </div>

         </div>
         
         <div className='footer-copyright'>
         <p>{copyright}</p>

         <div className='footer-terms'>
         <p>{terms}</p>
         <p>{privacy}</p>
         </div>

         </div>

    </div>
  )
}

export default Footer

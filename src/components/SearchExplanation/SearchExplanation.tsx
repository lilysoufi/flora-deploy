import HowItWorks from "../HowItWorks/HowItWorks"
import './SearchExplanation.css'


function SearchExplanation() {
     let apartmentSearchData = [
    {
      image : "./images/svg1.svg" ,
      title : "Search Apartment" ,
      desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
    }
    ,
    {
      image : "./images/Group 1166 (2) (1).svg" ,
      title : "Select Apartment" ,
      desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
    }
    ,
    {
      image : "./images/svg3.svg" ,
      title : "Confirm Apartment" ,
      desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
    }
  ]
  return (
    <div>
      <HowItWorks 
       title="How it Works"
       description="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
       apartmentInfo={apartmentSearchData }
      />
      <div className="dream-house">
        
        <div className="dream-house-content">
        <h2>Find Dream Home</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
       </div>
      </div>
    </div>
  )
}

export default SearchExplanation

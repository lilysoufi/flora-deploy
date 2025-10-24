import './TrendingCard.css'

interface TrendingCardProps {image : string ,
    price : number ,
     title : string ,
     city : string , 
     location : string
    }

const TrendingCard = ({image , price , title , city , location} : TrendingCardProps) => {
  return (
    <div className='trending-card-container'>
      <img id='house-image' src={image}></img>
      <h5 id='card-price'>${price}</h5>
      <h4 id='card-title'>{title}</h4>
      <h4 id='card-city'>{city}</h4>
      <div className='card-location'>
      <img id= 'location-image' src='./images/location (1).png'></img>
      <p id='location'>{location}</p>
      </div>
    </div>
  )
}

export default TrendingCard

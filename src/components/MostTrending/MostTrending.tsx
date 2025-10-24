import type { Headerprops } from "../SectionHeader/SectionHeader"
import SectionHeader from "../SectionHeader/SectionHeader"
import TrendingCard from "../TrendingCard/TrendingCard"
import './MostTrending.css'


function MostTrending({title, desc} : Headerprops) {
    let trendingCardsData = [
     {
        image :'./images/Rectangle 50.png' ,
        price : 300000 ,
        title :'Luxury Apartment in ' ,
        city : 'California',
        location : '1901 Thornridge Cir. Shiloh, Hawaii 81063'
     }
     ,
     {
       image :'./images/Rectangle 50 (1).png' ,
        price : 300000 ,
        title :'Luxury Apartment in ' ,
        city : 'California',
        location :'1901 Thornridge Cir. Shiloh, Hawaii 81063'
     }
     ,
     {
       image :'./images/Rectangle 50 (2).png' ,
        price : 300000 ,
        title :'Luxury Apartment in ' ,
        city : 'California',
        location :'1901 Thornridge Cir. Shiloh, Hawaii 81063'
     }
     ,
     {
       image :'./images/Rectangle 50 (3).png' ,
        price : 300000 ,
        title :'Luxury Apartment in ' ,
        city : 'California',
        location :'1901 Thornridge Cir. Shiloh, Hawaii 81063'
     }
     ,
     {
       image :'./images/Rectangle 51.png' ,
        price : 300000 ,
        title :'Luxury Apartment in ' ,
        city : 'California',
        location :'1901 Thornridge Cir. Shiloh, Hawaii 81063'
     }
     ,
     {
       image :'./images/Rectangle 52.png' ,
        price : 300000 ,
        title :'Luxury Apartment in ' ,
        city : 'California',
        location :'1901 Thornridge Cir. Shiloh, Hawaii 81063'
     }
    ]
  return (
    <div className="most-trending-container">
      
      <SectionHeader 
       title={title}
      desc ={desc}
       />
    

      <div className="trending-cards-container">
       {trendingCardsData.map((card) => {
        return (
            <TrendingCard 
             image = {card.image}
             price = {card.price}
             title= {card.title}
             city = {card.city}
             location={card.location}
            />
        )
       })}
      </div>

    </div>
  )
}

export default MostTrending

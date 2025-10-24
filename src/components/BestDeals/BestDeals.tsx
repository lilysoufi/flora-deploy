import { useState } from 'react';
import type { Headerprops } from '../SectionHeader/SectionHeader'
import SectionHeader from '../SectionHeader/SectionHeader';
import './BestDeals.css'
import BestDealsCard from '../BestDealsCard/BestDealsCard';


interface DealCardprops {
        image : string ,
        desc1 : string ,
        desc2 : string ,
        catagory : string
}

interface Catagories {
  catagory : string ;
}
interface BestDealprops {
  headerprops : Headerprops ;
  catagory : Catagories[];
  dealData : DealCardprops[];
}


function BestDeals({ headerprops, catagory , dealData }: BestDealprops) {
    const [activeCatagory , setActiveCatagory] =useState<string>("Residential Property")
    

   const filteredDealData = dealData.filter (item => item.catagory === activeCatagory)
   
    return (
    <div className='best-deals-container'>
      <SectionHeader 
       title={headerprops.title}
       desc = {headerprops.desc}
      />
      
      <div className='best-deal-filter'>

     
      <div className='catagory-container'>
        {catagory.map((cat) =>{
          return (
            <div className='catagory-tab'>
              <button  onClick={() => setActiveCatagory(cat.catagory)} >{cat.catagory}</button>
            </div>
          )
        })}
      </div>
       
       <div className='card-container'>
        {filteredDealData.map((card) => {
          return (
            <BestDealsCard 
             image = {card.image}
             desc1={card.desc1}
             desc2={card.desc2}
                />
          )
        })}
      
      </div>

      </div>

    </div>
  )
}

export default BestDeals

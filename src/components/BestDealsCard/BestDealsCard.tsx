import './BestDealsCard.css'

interface BestDealprops {
    image : string ;
    desc1 : string ;
    desc2 : string
}

const BestDealsCard = ({image , desc1 , desc2} : BestDealprops) => {
  return (
    <div className='image-card-container'>
      <img id='image' src={image}></img>

      <div className='image-card-features'>

      <p>{desc1}</p>
      <p>{desc2}</p>

      </div>

    </div>
  )
}

export default BestDealsCard

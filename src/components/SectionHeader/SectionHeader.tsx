import './SectionHeader.css'

export interface Headerprops {
    title : string ;
    desc : string
}

function SectionHeader({title , desc} : Headerprops) {
  return (
    <div className='section-header'>
      <h2 id='title'>{title}</h2>
      <p id='para'>{desc}</p>
    </div>
  )
}

export default SectionHeader

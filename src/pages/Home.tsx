import BestDeals from "../components/BestDeals/BestDeals"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import MostTrending from "../components/MostTrending/MostTrending"
import SearchExplanation from "../components/SearchExplanation/SearchExplanation"

import './Home.css'


const Home = () => {
      let dealCardData =[
      {
        image : './images/Image 03.jpg' ,
        desc1 : 'Featured' ,
        desc2 : '3D' ,
        catagory : "Residential Property"
      }
      ,{
        image : './images/Card 02.png' ,
        desc1 : 'Featured' ,
        desc2 : '3D' ,
        catagory : "Residential Property"
      }
      ,
      {
        
        image : './images/Card 03.png' ,
        desc1 : 'Featured' ,
        desc2 : '3D' ,
        catagory : "Residential Property"
      }
      ,
      {
        image : './images/pexels-rickyrecap-5362096.jpg' ,
        desc1 : 'Featured' ,
        desc2 : '3D' ,
        catagory : "Commercial Property"
      }
      ,
      {
         image : './images/pexels-matreding-9514327 (1).jpg' ,
        desc1 : 'Featured' ,
        desc2 : '3D' ,
        catagory : "Commercial Property"
      }
      ,
      {
        image : './images/commercial-properties.webp' ,
         desc1 : 'Featured' ,
        desc2 : '3D' ,
        catagory : "Commercial Property"
      }
      ,
      {
        image : './images/sales-purchase-950x319.jpg' ,
         desc1 : 'Featured' ,
        desc2 : '3D' ,
        catagory : "Agriculture Property"
      }
      ,
      {
        image : './images/54396_1.jpg',
         desc1 : 'Featured' ,
        desc2 : '3D' ,
        catagory : "Agriculture Property"
      }
      ,
      {
        image : './images/image1-6-1200x646.webp',
         desc1 : 'Featured' ,
        desc2 : '3D' ,
        catagory : "Agriculture Property"
      }
      ,
      {
         image : './images/Prologis.jpg',
         desc1 : 'Featured' ,
        desc2 : '3D' ,
        catagory : "Industrial Property"
      }
      ,
      {
        
         image : './images/e7529a67.png',
         desc1 : 'Featured' ,
        desc2 : '3D' ,
        catagory : "Industrial Property"
      
      }
      
    ]

    let catagoryData = [
      {
        catagory :"Residential Property"
      }
      ,
      {
        catagory : "Commercial Property"
      }
      ,
      {
        catagory : "Agriculture Property"
      }
      ,
      {
        catagory :"Industrial Property"
      }
    ]

  
   
     let summaryData =[
        {
            title : 'Service' ,
            subsection1 :  "Payment & Tax" ,
            subsection2 : "Features" ,
            subsection3 : "View Booking" ,
            subsection4 : "Support"
        }
        ,
        {
          title : 'About' ,
           subsection1 :  "About us" ,
            subsection2 : "News" ,
            subsection3 : "Pricing" ,
            subsection4 : "New Property"
        }
        ,
        {
          title : 'Our Location' ,
           subsection1 :  "2972 Westheimer Rd. Santa Ana, Illinois 85486 "
        }
    ]
  return (
    <div className="home">
     <Header />
     <SearchExplanation />
     <MostTrending 
      title="Most Trending"
     desc ="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
     />
     <BestDeals 
       headerprops={ {title :"Best Real Estate Deals" , desc : "Lorem ipsum dolor sit amet, consectetur adipiscing eli" }}
      catagory={catagoryData}
       dealData={dealCardData}
     
     />
     <Footer 
      footersummary={summaryData}
      logo = './images/Vector.png'
      logoName="./images/Flora.png"
      desc ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque."
      faceLogo="./images/Vector (1).png"
      xlogo="./images/twitter-fill.png"
      linkedinlogo="./images/linkedin-fill.png"
      copyright="Copyright 2024 flora. All Rights Reserved"
      terms="Terms & Conditions"
      privacy="Privacy Policy"
     />
    </div>
  )
}

export default Home

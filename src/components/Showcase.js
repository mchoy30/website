import React, { Component } from "react";
import Slider from "react-slick";
import SHOW_CASES from '../data/showcases';

const style = {
 display:'flex',
 alignSelf:'center',
 width:'70%'
}

const Showcase = props =>{
 const {title, description, image, link} = props.Showcase;
 return(
   <div style={{display:'flex', flexDirection:'column', alignContent:'center',}}>
     <h3 style={style}>{title}</h3>
     <img src={image}  alt='Showcase' style={style}/>
     <h3 style={{position:'relative', left:'90px'}}>Description:</h3>
     <span style={style}><p >{description} <a href={link} target='_blank' rel="noopener noreferrer" >Link to course</a></p></span>


   </div>
 )
}


export default function(){

    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 15000
    };
    return (
      <div style={{height:'400px',width:'600px',}}>


        <Slider {...settings}>
        {
        SHOW_CASES.map(SHOW_CASE => {
          return <Showcase key={SHOW_CASE.id} Showcase={SHOW_CASE} />
        })
        }

        </Slider>
      </div>
    );
  }

import React, {useState, useEffect} from 'react';
import './Title.css'
const TITLES = [
  'I am a graduate from Red River BIT program',
  'I am an enthusiastic learner',
  'I built this website using React.js',
  'I love to cook!',

];


export default ()=>{

  const [titleIndex, setTitleIndex] = useState(0);
  const [fadeIn, setFadein] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(()=>{
    let startTimer = setTimeout(()=> setFadein(false), 2000);
    let interval = setInterval(()=>{
      setTitleIndex(((titleIndex + 1) % TITLES.length));
      setFadein(true);
      setTime(()=>{setTimeout(()=> setFadein(false), 2000);})
    },4000);

    return function cleanUp(){
      clearTimeout(startTimer);
      clearInterval(interval);
      clearTimeout(time);
    }
  },[titleIndex])


   const title = TITLES[titleIndex];
  return(
    <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>{title}</p>
  )
}


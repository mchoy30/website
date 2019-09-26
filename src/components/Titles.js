import React, {useState, useEffect} from 'react';
import './Title.css'
const TITLES = [
  'a graduate from Red River BIT program',
  'a guitarist',
  'an enthusiastic learner',
  'a salsa dancer'
];


export default ()=>{

  const [titleIndex, setTitleIndex] = useState(0);
  const [fadeIn, setFadein] = useState(true);
  const [intervalId, setIntervalId] = useState(null);
  const [time, setTime] = useState(0);

  useEffect(()=>{
    let startTimer = setTimeout(()=> setFadein(false), 2000);
    let interval = setInterval(()=>{
      setTitleIndex(((titleIndex + 1) % TITLES.length));
      setFadein(true);
      setTime(()=>{setTimeout(()=> setFadein(false), 2000);})
    },4000)

    return function cleanUp(){
      clearTimeout(startTimer);
      clearInterval(interval);
      clearTimeout(time);
    }
  },[titleIndex])


   const title = TITLES[titleIndex];
  return(
    <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
  )
}


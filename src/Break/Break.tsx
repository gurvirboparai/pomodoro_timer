import React from 'react'
import { useState, useEffect } from 'react'
import Input from '../Input/Input';

type props = {setActiveIndex:React.Dispatch<React.SetStateAction<number>>}

const Break = ({setActiveIndex}:props) => {
  const[minutes, setMinutes] = useState(5);
  const[seconds, setSeconds] = useState(0);
  
  const[start, setStart] = useState(false);
  
  const timerMinutes = minutes < 10 ? `0${minutes}`: minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}`: seconds;

  const startTimer = () => {
    setStart(prev => !prev);
  }

  const restartTimer = () => {
    setMinutes(5);
    setSeconds(0);
    setStart(false);
  }

  
  useEffect(() => {
    let interval:any;
    if(start){
      interval = setInterval(() => {
        
        if(seconds === 0) {
          if(minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes-1);
          } else {
            setActiveIndex(0);            
          }
        } else {
          setSeconds(seconds-1);
        }
  
      }, 1000)
    }

    return () =>{
      clearInterval(interval);
    }

  }, [minutes, seconds, start, setActiveIndex])

  useEffect(() =>{
    document.title = `SuperFocus Break ${timerMinutes}:${timerSeconds}`
  }, [timerMinutes, timerSeconds])

  return (
    <div className="pomodoro">
      <div className="timer">{timerMinutes}:{timerSeconds}</div>
      <div className="buttons">
        <button onClick={() => startTimer()} className='start'>{!start ? 'START' : "STOP"}</button>
        <button onClick={() => restartTimer()} className='restart'><i className="fa fa-refresh"></i></button>
      </div>
      <Input setMinutes={setMinutes}/>
    </div>
  )
}

export default Break
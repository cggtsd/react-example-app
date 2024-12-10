import React, { useEffect, useRef, useState } from 'react'

function StopWatch() {
    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElaspedTime] = useState(0)
    const intervalIdRef = useRef(null)
    const startTimeRef = useRef(0)
    
    function formatTime() {

       let hours=Math.floor( elapsedTime/(1000*60*60))
       let minutes=Math.floor( elapsedTime/(1000*60)%60)
       let seconds=Math.floor( elapsedTime/(1000)%60)
       let milliseconds = Math.floor((elapsedTime % 1000) / 10)
       hours = String(hours).padStart(2, "0")
       minutes = String(minutes).padStart(2, "0")
       seconds = String(seconds).padStart(2, "0")
       milliseconds = String(milliseconds).padStart(2, "0")
        
        return `${minutes}:${seconds}:${milliseconds}`
    }

    function start() {
        setIsRunning(i=>true)
        startTimeRef.current = Date.now() - elapsedTime
        console.log(startTimeRef)
    }
    function stop() {
       setIsRunning(i=>false) 
    }
    function reset() {
        setElaspedTime(0)
        setIsRunning(i=>false)
    }
    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElaspedTime(Date.now() - startTimeRef.current)
            }, 10);
            return () => {
                clearInterval(intervalIdRef.current)
            }
        }
    },[isRunning])
  return (
      <div className='stopwatch'>
          <div className='display'>
              {formatTime()}
              <br />
              <div className='controls'> 
                  <button className='start-button'
                      onClick={start}>Start</button>
                  <button className='stop-button'
                  onClick={stop}>Stop</button>
                  <button className='reset-button'
                  onClick={reset}>Reset</button>
              </div>
          </div>
    </div>
  )
}

export default StopWatch
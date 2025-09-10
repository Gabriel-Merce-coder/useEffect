import React, { useEffect, useState } from 'react';

const TimerExample: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // useEffect for managing the timer
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isRunning) {
      console.log('TimerExample: Starting timer');
      
      intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);

      // Cleanup function - clear the interval when effect is cleaned up
      return () => {
        console.log('TimerExample: Clearing timer interval');
        if (intervalId) {
          clearInterval(intervalId);
        }
      };
    }

    // Return empty cleanup if not running
    return () => {};
  }, [isRunning]); // Effect depends on isRunning

  // Another useEffect to demonstrate multiple effects in one component
  useEffect(() => {
    console.log(`TimerExample: Timer value changed to ${seconds} seconds`);
    
    // Change document title based on timer
    document.title = isRunning ? `Timer: ${seconds}s` : 'useEffect Practice';
    
    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = 'useEffect Practice';
    };
  }, [seconds, isRunning]); // This effect depends on both seconds and isRunning

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="component-container">
      <h3>Timer Example with useEffect</h3>
      
      <div style={{ 
        fontSize: '2rem', 
        fontWeight: 'bold', 
        margin: '2rem 0',
        color: isRunning ? '#4caf50' : '#666',
        fontFamily: 'monospace'
      }}>
        {formatTime(seconds)}
      </div>

      <div className={`status ${isRunning ? 'success' : 'info'}`}>
        Timer is {isRunning ? 'RUNNING' : 'STOPPED'}
      </div>

      <div style={{ margin: '1rem 0' }}>
        <button 
          className="button" 
          onClick={startTimer} 
          disabled={isRunning}
        >
          Start Timer
        </button>
        
        <button 
          className="button" 
          onClick={stopTimer} 
          disabled={!isRunning}
        >
          Stop Timer
        </button>
        
        <button 
          className="button" 
          onClick={resetTimer}
        >
          Reset Timer
        </button>
      </div>

      <div className="code-explanation">
        <strong>Pattern:</strong> useEffect with setInterval and clearInterval in cleanup
        <br />
        <strong>Behavior:</strong> Sets up timer when running, cleans up interval when stopped/unmounted
        <br />
        <strong>Use case:</strong> Timers, intervals, recurring tasks
        <br />
        <strong>Multiple effects:</strong> This component shows two separate useEffect hooks working together
        <br />
        <strong>Side effect:</strong> Notice how the browser tab title changes with the timer!
      </div>
      
      <p><strong>Check the browser console and tab title to see the effects!</strong></p>
    </div>
  );
};

export default TimerExample;
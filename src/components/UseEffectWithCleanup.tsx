import React, { useEffect, useState } from 'react';

const UseEffectWithCleanup: React.FC = () => {
  const [isListening, setIsListening] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [eventCount, setEventCount] = useState<number>(0);

  useEffect(() => {
    if (!isListening) return;

    console.log('UseEffectWithCleanup: Setting up mouse listener');

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      setEventCount(prev => prev + 1);
    };

    // Add event listener
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup function - this runs when the component unmounts
    // or before the effect runs again (when dependencies change)
    return () => {
      console.log('UseEffectWithCleanup: Cleaning up mouse listener');
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isListening]); // Effect depends on isListening

  const toggleListening = () => {
    setIsListening(!isListening);
    if (isListening) {
      setEventCount(0);
      setMousePosition({ x: 0, y: 0 });
    }
  };

  return (
    <div className="component-container">
      <h3>useEffect with Cleanup Example</h3>
      
      <button className="button" onClick={toggleListening}>
        {isListening ? 'Stop' : 'Start'} Mouse Tracking
      </button>

      <div className={`status ${isListening ? 'success' : 'info'}`}>
        Mouse tracking: {isListening ? 'ON' : 'OFF'}
      </div>

      {isListening && (
        <div style={{ margin: '1rem 0', padding: '1rem', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>
          <p><strong>Mouse Position:</strong> X: {mousePosition.x}, Y: {mousePosition.y}</p>
          <p><strong>Events Tracked:</strong> {eventCount}</p>
          <p><em>Move your mouse to see the tracking in action!</em></p>
        </div>
      )}

      <div className="code-explanation">
        <strong>Pattern:</strong> useEffect(() =&gt; {`{ /* setup */; return () => { /* cleanup */ }; }`}, [deps])
        <br />
        <strong>Behavior:</strong> Setup runs on mount/dependency change, cleanup before unmount/re-run
        <br />
        <strong>Use case:</strong> Event listeners, subscriptions, timers, cleanup resources
      </div>
      
      <p><strong>Check the console to see setup and cleanup logs!</strong></p>
    </div>
  );
};

export default UseEffectWithCleanup;
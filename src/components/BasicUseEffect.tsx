import React, { useEffect, useState } from 'react';

const BasicUseEffect: React.FC = () => {
  const [message, setMessage] = useState<string>('Component not mounted yet');
  const [mounted, setMounted] = useState<boolean>(false);

  // Basic useEffect with empty dependency array - runs only once after initial render
  useEffect(() => {
    console.log('BasicUseEffect: Component mounted!');
    setMessage('Component mounted successfully!');
    setMounted(true);
    
    // This effect runs only once because of the empty dependency array []
  }, []); // Empty dependency array means this effect runs only on mount

  return (
    <div className="component-container">
      <h3>Basic useEffect Example</h3>
      <div className={`status ${mounted ? 'success' : 'info'}`}>
        {message}
      </div>
      <div className="code-explanation">
        <strong>Pattern:</strong> useEffect(() =&gt; {`{ /* code */ }`}, [])
        <br />
        <strong>Behavior:</strong> Runs only once after the component mounts (like componentDidMount)
        <br />
        <strong>Use case:</strong> Initial data loading, setting up subscriptions, one-time setup
      </div>
      <p><strong>Check the browser console to see the effect log!</strong></p>
    </div>
  );
};

export default BasicUseEffect;
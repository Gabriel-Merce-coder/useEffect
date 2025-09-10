import React, { useEffect, useState } from 'react';

const UseEffectWithDependencies: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('React');
  const [effectCounter, setEffectCounter] = useState<number>(0);

  // useEffect with dependencies - runs when count or name changes
  useEffect(() => {
    console.log(`UseEffectWithDependencies: Effect ran! Count: ${count}, Name: ${name}`);
    setEffectCounter(prev => prev + 1);
    
    // This effect runs whenever count or name changes
  }, [count, name]); // Dependency array with count and name

  return (
    <div className="component-container">
      <h3>useEffect with Dependencies Example</h3>
      
      <div className="status info">
        Effect has run {effectCounter} times
      </div>

      <div style={{ margin: '1rem 0' }}>
        <label>
          Count: {count}
          <br />
          <button className="button" onClick={() => setCount(count + 1)}>
            Increment Count
          </button>
          <button className="button" onClick={() => setCount(count - 1)}>
            Decrement Count
          </button>
        </label>
      </div>

      <div style={{ margin: '1rem 0' }}>
        <label>
          Name: 
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            style={{ margin: '0 0.5rem', padding: '0.25rem' }}
          />
        </label>
      </div>

      <div className="code-explanation">
        <strong>Pattern:</strong> useEffect(() =&gt; {`{ /* code */ }`}, [dependency1, dependency2])
        <br />
        <strong>Behavior:</strong> Runs after initial render and whenever any dependency changes
        <br />
        <strong>Use case:</strong> Responding to prop/state changes, updating derived state
      </div>
      
      <p><strong>Try changing the count or name to see the effect run!</strong></p>
    </div>
  );
};

export default UseEffectWithDependencies;
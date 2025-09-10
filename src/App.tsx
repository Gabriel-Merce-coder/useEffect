import React from 'react';
import './App.css';
import BasicUseEffect from './components/BasicUseEffect';
import UseEffectWithDependencies from './components/UseEffectWithDependencies';
import UseEffectWithCleanup from './components/UseEffectWithCleanup';
import DataFetching from './components/DataFetching';
import TimerExample from './components/TimerExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>useEffect Practice Examples</h1>
        <p>Practica useEffect - Various patterns and use cases</p>
      </header>
      
      <main className="App-main">
        <section className="example-section">
          <h2>1. Basic useEffect (componentDidMount equivalent)</h2>
          <BasicUseEffect />
        </section>

        <section className="example-section">
          <h2>2. useEffect with Dependencies</h2>
          <UseEffectWithDependencies />
        </section>

        <section className="example-section">
          <h2>3. useEffect with Cleanup</h2>
          <UseEffectWithCleanup />
        </section>

        <section className="example-section">
          <h2>4. Data Fetching</h2>
          <DataFetching />
        </section>

        <section className="example-section">
          <h2>5. Timer Example</h2>
          <TimerExample />
        </section>
      </main>
    </div>
  );
}

export default App;

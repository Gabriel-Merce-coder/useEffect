# useEffect Practice Examples

**Practica useEffect** - A comprehensive React application demonstrating various useEffect patterns and use cases.

![useEffect Practice Examples](https://github.com/user-attachments/assets/05fed398-3dc7-49f1-876e-92216130ea4a)

## 🎯 Purpose

This project is designed to help developers understand and practice different patterns of React's `useEffect` hook through interactive examples.

## 🚀 Features

### 1. Basic useEffect (componentDidMount equivalent)
- Demonstrates useEffect with empty dependency array `[]`
- Runs only once after component mounts
- Perfect for initial setup, data loading, and one-time subscriptions

### 2. useEffect with Dependencies
- Shows how useEffect responds to state and prop changes
- Interactive counter and text input to trigger effects
- Tracks how many times the effect has run

### 3. useEffect with Cleanup
- Demonstrates cleanup functions to prevent memory leaks
- Interactive mouse tracking example
- Shows setup and teardown of event listeners

### 4. Data Fetching
- Async data fetching with useEffect
- Loading states and error handling
- Cleanup flag to prevent state updates after unmount
- Simulated API calls with realistic delays

### 5. Timer Example
- Multiple useEffect hooks in one component
- Timer with start/stop/reset functionality
- Document title changes as side effect
- Proper interval cleanup

## 🛠️ Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Gabriel-Merce-coder/useEffect.git
cd useEffect
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📚 Learning Objectives

After exploring this project, you will understand:

- ✅ When to use useEffect with empty dependencies `[]`
- ✅ How to make useEffect respond to specific dependencies
- ✅ Why and how to implement cleanup functions
- ✅ Best practices for data fetching with useEffect
- ✅ How to manage timers and intervals properly
- ✅ Common useEffect patterns and pitfalls to avoid

## 🔍 Key Concepts Covered

### Empty Dependencies
```javascript
useEffect(() => {
  // Runs only once after mount
}, []);
```

### With Dependencies
```javascript
useEffect(() => {
  // Runs when count or name changes
}, [count, name]);
```

### With Cleanup
```javascript
useEffect(() => {
  // Setup
  const cleanup = () => {
    // Cleanup logic
  };
  
  return cleanup; // Return cleanup function
}, [dependencies]);
```

### Async Data Fetching
```javascript
useEffect(() => {
  let isCancelled = false;
  
  const fetchData = async () => {
    const result = await api.getData();
    if (!isCancelled) {
      setState(result);
    }
  };
  
  fetchData();
  
  return () => {
    isCancelled = true;
  };
}, []);
```

## 🎮 Interactive Examples

Each example includes:
- **Live code demonstrations** with real-time updates
- **Console logging** to show effect execution
- **Visual feedback** to understand when effects run
- **Detailed explanations** of patterns and use cases
- **Interactive controls** to trigger different scenarios

## 🧑‍💻 Technology Stack

- **React 18** with TypeScript
- **Create React App** for project setup
- **CSS3** for styling
- **Modern React Hooks** (useState, useEffect)

## 📖 Additional Resources

- [React useEffect Documentation](https://reactjs.org/docs/hooks-effect.html)
- [useEffect Complete Guide](https://overreacted.io/a-complete-guide-to-useeffect/)
- [React Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)

## 🤝 Contributing

Feel free to contribute by:
- Adding more useEffect examples
- Improving documentation
- Fixing bugs or enhancing UI
- Suggesting new learning scenarios

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
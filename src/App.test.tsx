import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders useEffect practice examples heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/useEffect Practice Examples/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders all useEffect example sections', () => {
  render(<App />);
  
  // Check for all 5 example sections by their h2 headings
  expect(screen.getByText(/1\. Basic useEffect \(componentDidMount equivalent\)/i)).toBeInTheDocument();
  expect(screen.getByText(/2\. useEffect with Dependencies/i)).toBeInTheDocument();
  expect(screen.getByText(/3\. useEffect with Cleanup/i)).toBeInTheDocument();
  expect(screen.getByText(/4\. Data Fetching/i)).toBeInTheDocument();
  expect(screen.getByText(/5\. Timer Example/i)).toBeInTheDocument();
});

test('renders interactive elements', () => {
  render(<App />);
  
  // Check for interactive buttons that should be present initially
  expect(screen.getByText(/Increment Count/i)).toBeInTheDocument();
  expect(screen.getByText(/Start Mouse Tracking/i)).toBeInTheDocument();
  expect(screen.getByText(/Start Timer/i)).toBeInTheDocument();
  // Note: Data fetching might be in loading state, so we check for Clear Users instead
  expect(screen.getByText(/Clear Users/i)).toBeInTheDocument();
});

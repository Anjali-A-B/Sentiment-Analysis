// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import SentimentAnalysis from './SentimentAnalysis'; // Import SentimentAnalysis component

const App = () => {
  return (
    <div>
      <SentimentAnalysis />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

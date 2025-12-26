import React from 'react'
import Home from './pages/Home'
import CursorGlow from './components/CursorGlow'
import Background from './components/background'
import './App.css'

function App() {
  return (
    <>
      {/* Background Layer */}
      <div className="bg-layer">
        <Background />
      </div>

      {/* UI Content */}
      <div className="app-content">
        <Home />
      </div>

      <CursorGlow />
    </>
  );
}

export default App;

import React from 'react';
import './css/App.css';
import Title from './components/Title';
import Page2 from './components/Page2';
import Page3 from './components/page3/Page3';

function App() {
  return (
    <div className="App">
      <Title />
      <Page2 />
      <Page3 />
      <div style={{
        height: '48px',
      }}></div>
      <div style={{
        backgroundImage: 'linear-gradient(145deg, #72f, #c1b)',
        height: '16px',
      }}></div>
    </div>
  );
}

export default App;

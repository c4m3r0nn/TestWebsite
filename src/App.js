import React from 'react';
import Header from './Components/Header'; // Import the Header component
import Hero from './Components/Hero';

const App = () => {
  return (
    <div className="app">
      <Header />  {/* Use the Header component */}
      <Hero />
      {/* Other components and content */}
    </div>
  );
}

export default App;

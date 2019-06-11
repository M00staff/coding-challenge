import React from 'react';
import { Carousel, Navbar, Cards, Content } from './components'
import './App.scss';

function App() {
  const heading1 = 'First Feature heading. It will blow your mind'
  const heading2 = 'Second Feature heading. It will blow your mind'
  const heading3 = 'Third Feature heading. It will blow your mind'
  const caption = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Cards />
      <Content heading={heading1} caption={caption}/>
      <Content heading={heading2} caption={caption}/>
      <Content heading={heading3} caption={caption}/>
    </div>
  );
}

export default App;


import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React from 'react';
import Textform from './components/Textform';
function App() {
  return (
    <> 
  <Navbar title='Textutils' abouttext='About us'/>
   {/* <Textform heading="Enter the text here"/> */}
    <About/>
    <Textform/>
     </>

  );
}

export default App;

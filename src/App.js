import React from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import './App.css';
import 'tachyons'; 


function App() {
  return (
    <div className="App">
        <Navigation />
        <Logo />
        <ImageLinkForm/>
        {/*
        <FaceRecognition /> */}
    </div>
  );
}

export default App;

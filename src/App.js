import React from 'react';
//import logo from './logo.svg';
import './App.css';
import MoviesList from './MoviesList.js';
import MovieCard from './MovieCard.js';
import './style.css'
// import picnet from './images/'
//import pic from './images/fall-1072821__340.jpg';

function App() {
  

  return (
    <div className='container' style={{backgroundImage: 'url('+require('./images/pic.webp')+')',width:'100%',backgroundRepeat: 'no-repeat',backgroundSize:'cover'}}>
     
    <MoviesList/>
    <MovieCard/>
    </div>
  );
}

export default App;

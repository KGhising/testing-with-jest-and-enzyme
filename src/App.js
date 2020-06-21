import React from 'react';
import './App.css';

import GuessedWords from './GuessedWords.js';
import Congrats from './Congrats.js';

function App() {
  return (
    <div className="container">
        <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={[{ guessedWord: 'hello', letterMatchCount: 3 }]} />    
    </div>
  );
}

export default App;

import React from 'react';
import './App.scss';
import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/Footer';
// import { CardSm } from './components/BookCards/CardSm/CardSm';
import { BooksRow } from './components/BookCards/CardSm/BooksRow';


function App() {
  return (
    <div className="App">
    <NavigationBar />
    <BooksRow/>
    <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.scss';
import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/Footer';
// import { CardSm } from './components/BookCards/CardSm/CardSm';
import { BooksRow } from './components/BookCards/CardSm/BooksRow';
import { SelectedBook } from './components/BookCards/SelectedBook';
import { SignUp } from './components/SignUp/SignUp';
import { SignIn } from './components/SignIn';


function App() {
  return (
    <div className="App">
    <NavigationBar />
    <SignUp />
    <SignIn />
    <BooksRow/>
    <SelectedBook/>
    <Footer />
    </div>
  );
}

export default App;

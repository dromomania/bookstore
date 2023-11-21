import React from 'react';
import './App.scss';
import { NavigationBar, Footer, RegistrationActivation } from './components';
import { HomePage, Cart, SignUpForm, SignInForm, PickedBook } from './pages';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path={'/'}>
          <Route index element={<HomePage />} />
          <Route path={'sign-up'} element={<SignUpForm />} />
          <Route path={'activate/:uid/:token'} element={<RegistrationActivation />} />
          <Route path={'sign-in'} element={<SignInForm />} />
          <Route path={'picked-book'} element={<PickedBook />} />
          <Route path={'cart'} element={<Cart />} />
          <Route path={'/:isbn'} element={<PickedBook />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

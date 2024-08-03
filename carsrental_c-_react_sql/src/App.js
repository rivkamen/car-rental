import './App.css'
import React from 'react';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import store from './store'
import Catalog from './components/Catalog';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Register from './components/Register';
import DressComponent from "./components/DressComponent"
import Navbar from "./components/Navbar"
import ContactForm from "./components/ContactForm"
import Login2 from './components/Login';
import RentCard from './components/RentCar';
import AddCard from './components/AddCar';
import CatalogManager from './components/manager/CatalogManager'
import HomePage from './components/HomePage';
import EndRetal from './components/End';

function App() {
  return (

    <Provider store={store}>
      <BrowserRouter>
        <Navbar />

        <Routes>
        <Route path='/login' element={<Login2 />} />
        <Route path='/form' element={<RentCard />} />
          <Route path='/addCar' element={<AddCard />} />
          <Route path='/CatalogManager' element={<CatalogManager />} />
          <Route path='/end' element={<EndRetal />} />
          <Route path='/' element={<HomePage/>}/>
          <Route path='/register' element={<Register />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/dressComponent' element={<DressComponent />} />
          <Route path='/contactForm' element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

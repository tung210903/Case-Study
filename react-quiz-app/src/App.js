import React from 'react'
import './App.css';
import Form from './components/login-form/Form';
import Settings from './components/pages/Settings';
import Questions from './components/pages/Questions';
import FinalScreen from './components/pages/FinalScreen';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Form/>}></Route>
      <Route path="/settings" element={<Settings/>}></Route>
      <Route path="/questions" element={<Questions/>}></Route>
      <Route path="/score" element={<FinalScreen/>}></Route>
     </Routes>
    </BrowserRouter>



  );
}





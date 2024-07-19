import React from 'react';
import { Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import ToDo from "./pages/ToDo"

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ToDo" element={<ToDo />} />
    </Routes>
  );
};

export default App;

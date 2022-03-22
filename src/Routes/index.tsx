import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../screens/Home';
import Destinos from '../screens/Destinos';


const ListRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ListRoutes;
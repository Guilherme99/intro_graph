import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux"
import Home from '../screens/Home';
import Destinos from '../screens/Destinos';

interface Props {
  component: React.ComponentType
  path?: string
}

export const PrivateRoute: React.FC<Props> = ({ component: RouteComponent }) => {
  const user: IUser = useSelector(
    (state: UserState) => state.user);

  let isAuthenticated = user.name !== '' ; 
  
  if (isAuthenticated) {
    return <RouteComponent />
  }

  return <Navigate to="/" />
}

const ListRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/destinos"
          element={<PrivateRoute component={Destinos} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default ListRoutes;
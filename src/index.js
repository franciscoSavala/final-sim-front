import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './routes/Login/Login';
import Simulation from './routes/Simulation/Simulation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/simulation", 
    element: <Simulation apiUrl="http://localhost:8080/api/v1"/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);


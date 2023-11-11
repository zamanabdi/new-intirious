import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom";
import './index.css';
import App from './App';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from "./screens/ProductScreen.jsx";





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route index={true} path='/' element={<HomeScreen/>}/>

    <Route path='/product/:id' element={<ProductScreen/>} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);



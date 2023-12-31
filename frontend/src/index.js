import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from "react-redux";
import store from "./store.js";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen.jsx";
import CartScreen from "./screens/CartScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import ShippingScreen from "./screens/ShippingScreen.jsx";
import PrivateRoute from "./components/privateRoute/PrivateRoute.jsx";
import PaymentScreen from "./screens/PaymentScreen.jsx";
import PlaceOrderScreen from "./screens/PlaceOrderScreen.jsx";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />

      <Route path="/product/:id" element={<ProductScreen />} />

      <Route path="/cart" element={<CartScreen/>}/>

      <Route path='/login' element={<LoginScreen/>}/>

      <Route path="/register" element={<RegisterScreen/>}/>

      
      {/* private routes */}
      <Route path="" element={<PrivateRoute/>}>
      
      <Route path="/shipping" element={<ShippingScreen/>}/>

      <Route path="/payment" element={<PaymentScreen/>} />

      <Route path="/placeorder" element={<PlaceOrderScreen/>}/>
      </Route>



    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

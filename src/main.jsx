import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import MyProducts from './MyProducts';
import ProductDetails from './ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/contact",
    element: <div>Here is Contact </div>,
  },
  {
    path: "/about",
    element: <div>Here is Contact </div>,
  },
  {
    path: "/products",
    element: <MyProducts />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <RouterProvider router={router} />

  </>,
)

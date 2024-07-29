import React from "react";
import './styles/App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Report from "./pages/Report";
import Error from "./pages/Error";
import Library from "./pages/Library";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Registration from "./pages/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/report",
    element: <Report />
  },
  {
    path: "/library",
    element: <Library />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/shop",
    element: <Shop />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/registration",
    element: <Registration />
  }
]);

function App() {
  return (
    <div className="App">
      <Nav />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
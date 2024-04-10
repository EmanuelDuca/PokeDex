import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from "./routes/Root"
import Home from './routes/Home';
import AboutPokemon from './routes/AboutPokemon';
import { RouterProvider, createHashRouter } from "react-router-dom"

const router = createHashRouter([
  {
      path: "/",
      element: <Root />,
      children: [
          {
            path: "/",
            element: <Home />,
          },
          {
              path: "/about",
              element: <AboutPokemon />,
          },
      ],
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

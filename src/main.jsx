import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sigin from "./Pages/SIginUp/Sigin.jsx";

import App from "./App.jsx";
import Login from "./Pages/Login/Login.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";



const router = createBrowserRouter([
  {
    path: "/SignUp/",
    element: <Sigin />,
  },
  {
    path: "/Home/",
    element: (<App />),
  },
  {
    path: "/login/",
    element: <Login/>,
  },
  {
    path: "/About/",
    element: <About/>,
  },
  {
    path: "/Contact/",
    element: <Contact/>,
  },
  {
    path: "/",
    element: (
     <App/>
    ),
  },


]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

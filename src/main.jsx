import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {RouterProvider } from "react-router-dom";
import router from "./components/Route/Route";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>This is Home</div>,
//   },
//   {
//     path: "/products",
//     element: <div>Products hitted</div>,
//   },
//   {
//     path: "/about",
//     element: <div>About hitted</div>,
//   }
// ]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <section>
//         <div>This is Home</div>
//         <Outlet />
//       </section>
//     ),

//     children: [
//       {
//         path: "/products",
//         element: <div>Products hitted</div>,
//       },
//       {
//         path: "/about",
//         element: <div>About hitted</div>,
//       },
//     ],
//   },
// ]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

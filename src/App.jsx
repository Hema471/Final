import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RootLayout from "./RootLayout";
import { Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Cards from "./Cards";
import MovieDetail from "./MovieDetail";
import FavoritesPage from "./FavoritesPage";
import SignUp from './SginUP/SignUp';
import LogIn from './LogIn/LogIn';
import ForgetPass from "./ForgetPass/ForgetPass";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Cards /> },
        { path: "movies/:id", element: <MovieDetail /> },
        { path: "/home", element: <Cards /> },
        { path: "/MyFav", element: <FavoritesPage /> },
        { path: "/SignUp", element: <SignUp /> },
        { path: "/Login", element: <LogIn /> },
        { path: "/Login/SignUp", element: <SignUp /> },
        { path: "/SignUp/Login", element: <LogIn /> },
        { path: "/Login/ForgetPass", element: <ForgetPass /> },
        { path: "/LogIn/ForgetPass/SignUp", element: <SignUp /> },
        { path: "/LogIn/ForgetPass/LogIn", element: <LogIn /> },
      ],
    },
  ]);  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;

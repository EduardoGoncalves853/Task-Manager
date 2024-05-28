<<<<<<< HEAD

import { createBrowserRouter } from "react-router-dom"
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";


export const authRouter = createBrowserRouter([
    {path: "/", element: <SignIn/>},
    {path: "/signup", element: <SignUp/>},
])
=======
import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export const authRouter = createBrowserRouter([
  { path: "/", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
]);
>>>>>>> 93964a39d37457b7e3c58a6bcc2baa9de02e22d2

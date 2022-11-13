import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyReview from "../Pages/MyReview/MyReview";
import Register from "../Pages/Register/Register";
import ServiceDetail from "../Pages/Services/ServiceDetail";
import Services from "../Pages/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://paw-care-server.vercel.app/serviceslimit')
            },
            {
                path: 'services',
                element: <Services></Services>,
                loader: () => fetch('https://paw-care-server.vercel.app/services')
            },
            {
                path: 'services/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: ({ params }) => fetch(`https://paw-care-server.vercel.app/services/${params.id}`)
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: 'myreview',
                element: <MyReview></MyReview>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]

    }
])

export default router;
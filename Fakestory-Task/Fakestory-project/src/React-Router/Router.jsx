import {createBrowserRouter} from "react-router";
import {RouterProvider } from "react-router/dom";
// import UserList from "../Path-Parameter/User-list";
// import UserDetails from "../Path-Parameter/User-details";
// import UserName from "../Path-Parameter/User-Name";




const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <Products />,

    // },
    // {
    //     path: "/:id",
    //     element: <ProductDetails/>
    // }

// {
//     path: "/",
//     element: <UserList  />,
// },
// {
//      path: "/users/:id/:name",
//     element: <UserDetails />
// },
// {
//     path: "/users/:name",
//     element: <UserName />
// },


]);

const SeconRouter =()=>{
    return <RouterProvider router={router}/>;

};

export default SeconRouter;
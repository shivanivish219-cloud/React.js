import { createBrowserRouter, RouterProvider } from "react-router";

import ProductDetails from "./Pages/ProductDetails";
import Products from "./Pages/Products";
import ColorPicker from "./Query-params/color choose";
import SearchParams from "./Query-params/search-params";
import UserList from "./Path-Parameter/User-list";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/users",
    element: <UserList />
  },
  {
    path: "/products/:id",
    element: <ProductDetails />,
  },
  {
    path: "/search",
    element: <SearchParams />,
  },
  {
    path: "/color-picker",
    element: <ColorPicker />,

  }
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
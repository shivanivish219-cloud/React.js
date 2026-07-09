import { createBrowserRouter, RouterProvider } from "react-router";

import ProductDetails from "./Pages/ProductDetails";
import Products from "./Pages/Products";
import ColorPicker from "./Query-params/color choose";
import SearchParams from "./Query-params/search-params";
import UserList from "./Path-Parameter/User-list";
import ProductLocation from "./Query-params/useLocation";
import DarkTheme from "./Components/Drill-darkMode";
import ContextTheme from "./Components/ContextAPI-theme";
import ProductListing from "./Components/API-calling";
import ProductListingwithAsync from "./Components/API-calling";
import APIaxios from "./Components/API-calling";
import Commodities from "./Components/Fetch-APIcalling";
import WebSocketDemo from "./Components/Web-Socket";
import FlightSearch from "./Pages/SearchFlight";
// import FlightSearch2 from "./Pages/Airline";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/users",
    element: <UserList />,
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
  },
  {
    path: "/location",
    element: <ProductLocation />,
  },
  {
    path: "/drill-async",
    element: <DarkTheme />,
  },
  // {
  //   path: "/context",
  //   element: <ContextTheme />
  // },
  {
    path: "/Calling",
    element: <ProductListing />,
  },
  {
    path: "/async-await",
    element: <ProductListingwithAsync />,
  },
  {
    path: "/axios",
    element: <APIaxios />,
  },
  {
    path: "/Catcherror",
    element: <Commodities />,
  },
  {
    path: "/socket",
    element: <WebSocketDemo />,
  },
  {
    path: "/searchflight",
    element: <FlightSearch />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

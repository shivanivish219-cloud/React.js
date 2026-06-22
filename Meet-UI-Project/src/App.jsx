import { RouterProvider, createBrowserRouter } from "react-router";
import PeoplePanel from "./components/Peoples-Meet-UI";
// import PeoplePanel from "./components/People-List";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
  },
  {
    path: "/people",
    element: <PeoplePanel />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
import { RouterProvider, createBrowserRouter } from "react-router";
import PeoplePanel from "./components/Peoples-Meet-UI";
// import ThemeToggle from "./components/theme";
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
  // {
  //   path: "/theme",
  //   element: <ThemeToggle />,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

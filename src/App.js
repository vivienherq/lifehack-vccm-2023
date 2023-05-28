import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import Page from "./pages/Page";
import LoginPage from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/page", element: <LoginPage /> }
      // { path: "/page", element: <Page /> },
      // { path: "/page", element: <Page /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

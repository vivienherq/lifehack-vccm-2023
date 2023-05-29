import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import ChatPage from "./pages/Chat";
import LoginPage from "./pages/Login";
import LandingPage from "./pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/chat", element: <ChatPage /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

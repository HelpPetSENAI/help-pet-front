
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ComingSoonPage from "./pages/CommingSoonPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ExamplePage from "./pages/ExamplePage.jsx";
import Login from "./pages/Login/Login.jsx";
import Background from "./components/Background/Background.jsx";

import GlobalStyle from "./styles/GlobalStyle.js";
import MessagePageG6 from './pages/page-g6/MessagePageG6.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ComingSoonPage />,
errorElement: <NotFoundPage />
  },
  {
    path: '/coming-soon',
    element: <ComingSoonPage />
  },
  {
    path: '/example',
    element: <ExamplePage />
  },
  {
    path: '/message',
    element: <MessagePageG6 />
  },  
  {
    path: "/login",
    element: <Login />
  },
  ]);


export default function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

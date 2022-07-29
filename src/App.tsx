import { useRoutes } from "react-router-dom";

// layout
import BaseLayout from "src/layouts/BaseLayout";

// pages
import Home from "./pages/Home";

// style
import "./App.scss";

function App() {
  const routes = useRoutes([
    {
      element: <BaseLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return routes;
}

export default App;

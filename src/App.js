import { useRoutes } from "react-router-dom";
import Kalevala from "./screens/Kalevala";
import EventList from "../src/screens/EventList.jsx";
import "./App.css";
import About from "./screens/About";

import Shop from "./screens/Shop";
import Home from "./screens/Home";

function App() {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/kalevala", element: <Kalevala /> },
    // { path: "/shop/:id", element: <Shop /> },
    { path: "/events", element: <EventList /> },
    { path: "/shop", element: <Shop /> },
    // { path: "/shop/:id", element: <ShopDetails /> },
    // { path: "/events/:id", element: <Event /> },
    { path: "/about", element: <About /> },
  ]);
  return <div className="App">{element}</div>;
}

export default App;

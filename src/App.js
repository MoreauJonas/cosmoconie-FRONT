import { useRoutes } from "react-router-dom";
import "./App.css";

import Home from './screens/Home';
import Kalevala from './screens/Kalevala';
import Shop from './screens/Shop';
import EventList from './screens/EventList';

function App() {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/Kalevala", element: <Kalevala /> },
    // { path: "/shop", element: <ShopList /> }, //ATTENTION!
    { path: "/shop/:id", element: <Shop /> },
    { path: "/events", element: <EventList /> },
    // { path: "/events/:id", element: <Event /> },
    // { path: "/about", element: <About /> },
  ]);
  return <div className="App">{element}</div>;
}

export default App;
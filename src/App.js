import { useRoutes } from "react-router-dom";
import "./App.css";
import About from "./screens/About";

import Home from './screens/Home';
import Kalevala from './screens/Kalevala';
import Navbar from './components/Navbar';
import Shop from './screens/Shop';
import EventList from './screens/EventList';
import Paiement from './screens/Paiement';

function App() {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/Kalevala", element: <Kalevala /> },
    { path: "/shop", element: <Shop /> },
    // { path: "/shop/:id", element: <Shop /> },
    { path: "/events", element: <EventList /> },
    // { path: "/events/:id", element: <Event /> },
    { path: "/about", element: <About /> },
    {path: "/paiement", element: <Paiement />}
  ]);
  return <div className="App">
    <Navbar /> 
    {element}</div>;
}

export default App;
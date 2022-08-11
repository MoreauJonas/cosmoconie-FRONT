import { useRoutes } from "react-router-dom";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import About from "./screens/About";
import Kalevala from './screens/Kalevala';
import Navbar from './components/Navbar';
import Shop from './screens/Shop';
import EventList from './screens/EventList';
import CountDown from "./components/CountDown";
import Paiement from "./screens/Paiement";

import "./App.css";

function App() {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/Kalevala", element: <Kalevala /> },
    { path: "/shop", element: <Shop /> },
    { path: "/events", element: <EventList /> },
    { path: "/about", element: <About /> },
    { path: "/paiement", element: <Paiement /> },
  ]);
  return <div className="App">
    <Navbar /> 
    <CountDown />
    {element}
    <Footer />
    </div>;
}

export default App;

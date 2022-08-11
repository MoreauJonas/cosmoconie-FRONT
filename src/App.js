import { useRoutes } from "react-router-dom";
import Kalevala from "./screens/Kalevala";
import EventList from "../src/screens/EventList.jsx";
import "./App.css";
import Home from "./screens/Home";
import Footer from "./components/Footer";

import Shop from "./screens/Shop";

function App() {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/kalevala", element: <Kalevala /> },
    // { path: "/shop/:id", element: <Shop /> },
    { path: "/events", element: <EventList /> },
    { path: "/shop", element: <Shop /> },
    // { path: "/shop/:id", element: <ShopDetails /> },
    // { path: "/events/:id", element: <Event /> },
    // { path: "/about", element: <About /> },
  ]);
  return (
    <div className="App">
      {/* <Header /> */}
      {element}
      <Footer />
    </div>
  );
}

export default App;

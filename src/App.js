import { useRoutes } from "react-router-dom";
import "./App.css";
import Shop from "./screens/Shop"

function App() {
  let element = useRoutes([
    // { path: "/", element: <Home /> },
    // { path: "/Kalevala", element: <Kalevala /> },
    { path: "/shop", element: <Shop /> },
    // { path: "/shop/:id", element: <ShopDetails /> },
    // { path: "/events", element: <EventList /> },
    // { path: "/events/:id", element: <Event /> },
    // { path: "/about", element: <About /> },
  ]);
  return <div className="App">{element}</div>;
  
}

export default App;

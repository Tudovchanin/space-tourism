
import { Routes, Route} from "react-router-dom";


import Layout from "./components/Layout";
import  Home from "./pages/Home"
import Destination from "./pages/Destination";
import NotFoundPage from "./pages/NotFoundPage";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

import "./variables.css"
import "./reset.css"
import "./global.css"
import "./mediaQueries.css"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="destination" element={<Destination/>}/>
      <Route path="crew" element={<Crew/>}/>
      <Route path="technology" element={<Technology/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    </Routes>
    </>
   
  );
}

export default App;

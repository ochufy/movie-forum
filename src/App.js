import {Route, Routes} from "react-router-dom";
import Home from "./Home.js";
import Forum from "./Forum.js";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="forum" element={<Forum/>} />

    </ Routes>
  );
}

export default App;

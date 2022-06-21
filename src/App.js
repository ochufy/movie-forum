import {Route, Routes} from "react-router-dom";
import Home from "./Home.js";
import Forum from "./Forum.js";
import MoviePage from "./MoviePage.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="forum" element={<Forum/>} />
      <Route path="moviepage" element={<MoviePage/>} />

    </ Routes>
  );
}

export default App;

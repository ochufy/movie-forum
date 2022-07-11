import {Route, Routes} from "react-router-dom";
import Home from "./Home.js";
import Forum from "./Forum.js";
import MoviePage from "./MoviePage.js";
import LandingPage from "./LandingPage.js";
import {AuthContextProvider} from "./Context/AuthContext.js";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="home" element={<Home/>} />
        <Route path="forum" element={<Forum/>} />
        <Route path="moviepage/:id" element={<MoviePage/>} />

      </ Routes>
    </ AuthContextProvider>
  );
}

export default App;

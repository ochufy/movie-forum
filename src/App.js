import {Route, Routes} from "react-router-dom";
import Home from "./Home.js";
// import Forum from "./Forum.js";
import MoviePage from "./MoviePage.js";
import LandingPage from "./LandingPage.js";
import Account from "./Account.js";
import {AuthContextProvider} from "./Context/AuthContext.js";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="home" element={<Home/>} />
        <Route path="/home/moviepage/:id" element={<MoviePage/>} />
        <Route path="account" element={<Account/>} />


      </ Routes>
    </ AuthContextProvider>
  );
}

export default App;

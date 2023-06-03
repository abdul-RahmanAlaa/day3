import { Route, Routes } from "react-router-dom";
import "./App.css";
import TheNavbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Movies from "./components/movies/movies";
import TvShows from "./components/tvshows/tvshows";
import AboutUs from "./components/aboutus/aboutus";
import Favorites from "./components/favorites/favorites";
import LogIn from "./components/log in form/login";
import SignIn from "./components/sign in form/signIn";
import Wildcard from "./components/wildcard/wildcard";
import MoviesDetails from "./components/moviesDetails/moviesDetails";
import TvShowDetails from "./components/tvShowDetails/tvShowDetails";

function App() {
  return (
    <div className="App">
      <TheNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route>
          <Route path="/Movies" element={<Movies />} />
          <Route path="/tvshows" element={<TvShows />} />
        </Route>
        <Route path="/moviesDetails/:id" element={<MoviesDetails />} />
        <Route path="/tvShowDetails/:id" element={<TvShowDetails />} />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Wildcard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

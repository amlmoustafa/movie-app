import "./App.css";
import BackgroundImage from "./Components/bgImage/BackgroundImage";
import TopMovies from "./Components/Movies/TopMovies";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BackgroundImage />
      <TopMovies />
    </div>
  );
}

export default App;

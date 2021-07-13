import "./App.css";
import BackgroundImage from "./Components/BgCoverImage/BackgroundImage";
import Navbar from "./Components/Navbar/Navbar";
import ToggleTabs from "./Components/ToggleTabs/ToggleTabs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BackgroundImage />
      <ToggleTabs />
    </div>
  );
}

export default App;


import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom"
import HomePage from "./components/HomePage"
import {GoogleMap, Marker, InfoWindow} from "@react-google-maps/api"


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>

      </Routes>


    </div>
  );
}

export default App;

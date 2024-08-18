import './App.css'
import Navigationbar from "./components/Navigationbar/navigationbar"
import Charactersheet from "./pages/Charactersheet/charactersheet"
import Home from "./pages/Home/home"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <Navigationbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/charactersheet" element={<Charactersheet />} />
      </Routes>
    </Router>
  );
};


export default App;

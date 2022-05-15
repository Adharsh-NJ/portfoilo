import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/home/About';
import NavBar from './components/NavBar'
import SideBar from './components/SideBar';

export default function App() {
  return (
    <Router>
      <NavBar />
      <div style={{ display: "grid", gridTemplateColumns: "10% 90%", margin: "1rem 1rem" }}>
        <SideBar />
        <Routes>
          <Route path='/' exact element={<Home />} />

          <Route path ='/about' exact element={<About />}/>
        </Routes>
      </div>
    </Router>
  );
}

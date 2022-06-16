import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Layouts/Home/Home";
import About from "./Layouts/About/About";
import Detail from "./Layouts/Details/Detail";

function App() {
  return (
    <div className="App">
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "red" : "#000",
          background: isActive ? "yellow" : "",
        })}
      >
        Trang chủ
      </NavLink>
      <NavLink
        to="about"
        style={({ isActive }) => ({
          color: isActive ? "red" : "#000",
          background: isActive ? "yellow" : "",
        })}
      >
        About
      </NavLink>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="detail/:dcm" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

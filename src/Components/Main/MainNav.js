import { Link, NavLink, Route, Routes } from "react-router-dom";
import AboutPage from "../../Pages/AboutPage";
import ContactUSPage from "../../Pages/ContactUsPage";
import HomePage from "../../Pages/HomePage";
import ProjectsPage from "../../Pages/ProjectsPage";
import Logo from "../../resources/img/logo.png";

const MainNav = () => {
  return (
    <>
      <nav>
        <ul className="topnav">
          <li>
            <Link to="#">
              <img src={Logo} className="logo" height="50"  />
            </Link>
          </li>
          <div className="right">
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? "active" : "")}
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? "active" : "")}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? "active" : "")}
                to="/project"
              >
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? "active" : "")}
                to="/contact-us"
              >
                Contact
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectsPage />} />
        <Route path="/contact-us" element={<ContactUSPage />} />
      </Routes>
    </>
  );
};

export default MainNav;

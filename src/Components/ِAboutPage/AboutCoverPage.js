import { Link, Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/HomePage";

const AboutCoverPage = () => {
  return (
    <>
      <div className="cover-page">
        <div className="tit">
          <h1>about us</h1>
          <ul className="breadcrumb">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/project" className="active">
                Project
              </Link>
            </li>
          </ul>
          <Routes>
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default AboutCoverPage;

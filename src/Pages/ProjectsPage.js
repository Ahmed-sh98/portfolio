import carImage from "../resources/img/car.png";
import contactImage from "../resources/img/contact.png";
import expensesImage from "../resources/img/expenses.png";
import formImage from "../resources/img/form.png";
import LandingImage from "../resources/img/landing.png";
import storeImage from "../resources/img/store.png";
import Project from "../Components/Project/Project";
import { Link } from "react-router-dom";
const ProjectsPage = () => {
  return (
    <>
      <div className="cover-page">
        <div className="tit">
          <h1>Project</h1>
          <ul className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact-us" className="active">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <section id="project">
        <div className="flex project pt-30">
          <Project image={contactImage} title="project Contact Form" />
          <Project image={expensesImage} title="Expenses App" />
          <Project image={LandingImage} title="Landing Page" />
        </div>
        <div className="flex project">
          <Project image={carImage} title="Cars Page" />
          <Project image={formImage} title="Form Page" />
          <Project image={storeImage} title="Store Page" />
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;

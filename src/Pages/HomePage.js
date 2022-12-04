import carImage from "../resources/img/car.png";
import contactImage from "../resources/img/contact.png";
import Ahmed from "../resources/img/ahmed.png";
import landingImage from "../resources/img/landing.png";
import expensesImage from "../resources/img/expenses.png";
import storeImage from "../resources/img/store.png";
import tasksImage from "../resources/img/tasks.png";
import Project from "../Components/Project/Project";
import ContactUsForm from "../Components/ContactUs/ContactUsForm";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="main-cover">
        <div className="overllay">
          <div className="Cover-content">
            <h1>My Name Is Ahmed Salem </h1>
            <p>FrontEnd React Js Developer</p>
            <Link to="/about">about us</Link>
          </div>
        </div>
      </div>

      <section id="about">
        <div className="about flex main-container">
          <div className="item">
            <img src={Ahmed} alt="ahmed" className="aboutImage" />
          </div>
          <div className="item pt-30">
            <span className="green u-text-sup">ABOUT US</span>
            <h2>This is Information About Us</h2>
            <p>
              I am Ahmed Salem. Software engineer and web developer with 3 years
              of experience in programming languages ​​and As for my tools: -
              React. js - HTML and CSS - Bootstrap I have excellent experience
              in dealing with all kinds of websites, so I can offer you: _
              Designing websites in an attractive and responsive manner with all
              screens Responsive _ Building websites from scratch until
              publishing it on the Internet Modify and fix errors in websites
              (React.js) _ Building landing page pages Converting from PSD files
              to HTML and CSS
            </p>
            <div>
              <Link to="/#" className="green-btn">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="project">
        <div className="text-center">
          <span className="green u-text-sup  ">Project</span>
          <h2>We Offer Quality Service For Your Business </h2>
        </div>
        <div className="flex project pt-30">
          <Project image={contactImage} title="Project Contact Form" />
          <Project image={landingImage} title="project Landing Page" />
          <Project image={tasksImage} title="project Task Page" />
        </div>
        <div className="flex project">
          <Project image={carImage} title="project Car Page" />
          <Project image={storeImage} title="project Commerce Page" />
          <Project image={expensesImage} title="project Expenses App " />
        </div>
      </section>

      <ContactUsForm />
    </>
  );
};

export default HomePage;

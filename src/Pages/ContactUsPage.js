import { Link } from "react-router-dom";
import ContactUsForm from "../Components/ContactUs/ContactUsForm";

const ContactUsPage = () => {
  return (
    <>
      <div className="cover-page">
        <div className="tit">
          <h1>Contact us</h1>
          <ul className="breadcrumb">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/contact-us" className="active">
                Contact us
              </Link>
            </li>
          </ul>

          
        </div>
      </div>
      <ContactUsForm />

     
    </>
  );
};

export default ContactUsPage;

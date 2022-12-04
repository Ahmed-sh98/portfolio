import { useRef } from "react";
import ContactUsInfo from "./ContactUsInfo";
import ContactUsInput from "./ContactUsInput";
import ContactUsTextArea from "./ContactUsTextArea";

const ContactUsForm = () => {
  let nameRef = useRef();
  let subjectRef = useRef();
  let phoneRef = useRef();
  let detailRef = useRef();
  return (
    <>
      <section id="contactus">
        <div className="flex ">
          <div className="item w-40">
            <div>
              <span className="green u-text-sup">About US</span>
              <h2>Feel Free To Contact Us</h2>
            </div>

            <div className="flex mt-30">
              <div className="item contact-info mt-30">
                <div className="flex">
                  <ContactUsInfo
                    icon="fa-phone"
                    content="00 97059 4030716"
                    operation="tel"
                  />
                  <ContactUsInfo
                    icon="fa-phone"
                    content="00 97056 8879088"
                    operation="tel"
                  />
                </div>

                <div className="flex mt-30">
                  <ContactUsInfo
                    icon="fa-map"
                    content="Gaza, Palestine"
                    operation="address"
                  />
                  <ContactUsInfo
                    icon="fa-envelope"
                    content="ahmed salem"
                    operation="mailto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="item w-60">
            <div className="">
              <div>
                <span className="green u-text-sup"> Get in touch</span>
                <h2>
                  Please submit your request so that one of our consultants will
                  contact you soon!
                </h2>
              </div>
              <form>
                <ContactUsInput
                  type="text"
                  placeholder="Enter Your Name...."
                  id="name"
                  ref={nameRef}
                />

                <ContactUsInput
                  type="text"
                  placeholder="Your Subject.."
                  id="subject"
                  ref={subjectRef}
                />

                <ContactUsInput
                  type="tel"
                  placeholder="Your phone.."
                  id="phone"
                  ref={phoneRef}
                />
                <ContactUsTextArea
                  id="detail"
                  placeholder="Write Something.."
                  ref={detailRef}
                />

                <input type="submit" value="submit" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactUsForm;

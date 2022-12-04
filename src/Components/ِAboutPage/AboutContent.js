import ThirdImage from "../../resources/img/ahmed.png";

const AboutContent = () => {
  return (
    <>
      <section id="about">
        <div className="about flex main-container mt-30">
          <div className="item">
            <img src={ThirdImage} alt="" />
          </div>
          <div className="item pt-30">
            <span className="green u-text-sup">ABOUT US</span>
            <h2>My Name Is Ahmed Salem</h2>
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
            <div className="progress">
              <label>HTML</label>
              <progress value="90" max="100"></progress>

              <label>CSS</label>

              <progress value="85" max="100"></progress>

              <label>JS</label>
              <progress value="60" max="100"></progress>

              <label>ReactJs</label>
              <progress value="80" max="100"></progress>
            </div>
          </div>
        </div>
        <div className="about">
          <p className="mt-30"></p>
        </div>
      </section>
    </>
  );
};

export default AboutContent;

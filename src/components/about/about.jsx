import "./about.css";
import Award from "../../img/award.png";

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card.bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="S"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About me</h1>
        <p className="a-sub">
          Is long established fact that a reader will be connect reader
        </p>
        <p className="a-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla exusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eadolores.
        </p>
        <div className="a-award">
          <img src={Award} alt="se" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design</h4>
            <p className="a-award-desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla exveri d fugit.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;

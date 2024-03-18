import "./Card.scss";
import websiteImage from "../assets/website.png";

function Card() {
  return (
    <div className="card">
      <div className="main-border"></div>
      <div className="content">
        <div className="sub-border"></div>
        <div className="content-bg"></div>
        <div className="overlay"></div>
        <h1>Moved.</h1>
        <p>Mode of Effective Communication With Stakeholders</p>
        <div className="img-div">
          <img src={websiteImage} alt="website image" />
        </div>
      </div>
    </div>
  );
}

export default Card;

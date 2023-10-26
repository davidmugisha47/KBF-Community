import { Button } from "bootstrap";
import { Component } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const title = "Kingdom Business Forum Africa";
const desc = "A large community forum that connects Kingdom minded businesses, leaders and pastors across the globe.";

// const labelchangeone = "I am a";
// const labelchangetwo = "Looking for";
// const labelchangethree = "Age";
// const labelchangefour = "Country";
const btnText = "Register";

const imgLink = "assets/images/banner/business.png";
const imgAlt = "Dating Thumb";

class BannerOne extends Component {
  render() {
    return (
      <div
        className="banner padding-top padding-bottom bg_img"
        style={{ backgroundImage: "url(https://i.redd.it/eg1opaxt7nt01.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-5 col-12 wow fadeInLeft"
              data-wow-duration="1.5s"
            >
              <div className="banner__content">
                <div className="banner__title">
                  <p style={{ fontSize: "2.5em" }}>{title}</p>
                  <p>{desc}</p>
                  <Link to="/register" className="default-btn style-2" style={{ width: "130px" }}>
                    <span>{btnText}</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div
                className="banner__thumb banner__thumb--thumb1 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="1s"
              >
                <img src={imgLink} alt={imgAlt} height="auto" width="780px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerOne;

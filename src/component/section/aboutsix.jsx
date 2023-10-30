import { Component } from "react";
import { Link } from "react-router-dom";

const title = "Our dream for Africa";
const desc =
  "The continent of Africa is blessed with incredible wealth: its fertile lands, its abundant mineral resources, its rich supply of renewable energy potential and a young growing population that is hungry to succeed…. and yet its people are the most impoverished on the planet and growth rates in most areas lag behind many other nations.";
const imgUrl = "assets/images/about/01.png";
const imgAlt = "Dating Thumb";

class AboutSectionSix extends Component {
  render() {
    return (
      <div className="about about--style5 padding-top padding-bottom">
        <div className="container">
          <div className="row justify-content-center g-4 align-items-center">
            <div className="col-lg-6 col-12">
              <div className="about__thumb">
                <h3>What is happening</h3>
                <p>
                  We believe that this occurrence can be primarily attributed to
                  several factors: the corrupting impact of pride and greed on
                  humanity, leading to exploitation rather than responsible
                  stewardship; a lack of understanding among God's followers
                  regarding His teachings; a failure to grasp the genuine
                  intentions and purpose of establishing God's Kingdom on Earth
                  as it is in heaven; a deficiency in recognizing one's true
                  identity and the purpose for which Father God has designed
                  them; and a tendency to lead defeated lives, passively waiting
                  for divine rescue rather than actively engaging in and
                  positively impacting all aspects of society until the day
                  Earth genuinely mirrors heaven.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="about__content" style={{ marginLeft: "80px" }}>
                <h3>{title}</h3>
                {/* <h5>{subtitle}</h5> */}
                <p>{desc}</p>
                {/* <Link to="/membership" className="default-btn reverse"><span>{btnText}</span></Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutSectionSix;

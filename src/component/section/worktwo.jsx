import { Component } from "react";
import { Link } from "react-router-dom";

let WorkSectionTwoContentList = [
    {
        imgUrl: 'binoculars.png',
        imgAlt: 'logo',
        title: 'Vision',
        desc: 'To see the people of all nations, from Africa and beyond, live a life of worship before God in all things united in living God’s dreams, plans, and purposes for mankind and to fulfill our destiny as God’s children to reign and partner with God and steward the earth in a way that blessed all peoples and all nations.',
        btnText: 'See More Details',
        btnLink: '/policy',
    },
    {
        imgUrl: 'goal.png',
        imgAlt: 'Dating Thumb',
        title: 'Mission',
        desc: 'To create a holistic society encompassed by an environment centered with God’s presence, Heaven’s culture and Christ’s glory that transforms earth, bringing everyone and everything out of darkness into marvelous light.',
        btnText: 'Membership Details',
        btnLink: '/membership',
    },
]

class WorkSectionTwo extends Component {
    render() { 
        return (
            <div className="work work--style2 padding-top padding-bottom bg_img" style={{backgroundImage: "url(/assets/images/bg-img/01.jpg)"}}>
                <div className="container">
                    <div className="section__wrapper">
                        <div className="row g-4 justify-content-center">
                            {WorkSectionTwoContentList.map((val, i) => (
                                <div className="col-xl-6 col-lg-8 col-12 wow fadeInLeft" data-wow-duration="1.5s" key={i}>
                                    <div className="work__item">
                                        <div className="work__inner">
                                            <div className="work__thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="work__content">
                                                <h3>{val.title}</h3>
                                                <p>{val.desc} </p>
                                                {/* <Link to={val.btnLink} className="default-btn"><span>{val.btnText}</span></Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default WorkSectionTwo;
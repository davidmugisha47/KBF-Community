import { Component } from "react";

const title = "Our Platform";
const subtitle = "Providing a platform for you to connect with like-minded businesses and leaders who share a common mission: to collaborate and advance God's kingdom on earth.";

let AboutContentList = [
    {
        imgUrl: 'https://cdn-icons-png.flaticon.com/128/4207/4207230.png',
        imgAlt: 'Networking',
        title: 'Networking',
        desc: 'Connecting Businesses and Leaders Across Borders.',
    },
    {
        imgUrl: 'https://cdn-icons-png.flaticon.com/128/2058/2058768.png',
        imgAlt: 'Support',
        title: 'Support',
        desc: 'Uniting with global businesses and leaders.',
    },
    {
        imgUrl: 'https://cdn-icons-png.flaticon.com/128/1491/1491165.png',
        imgAlt: 'Thinking',
        title: 'Idea development',
        desc: 'Leveraging our network of achievers to nurture your ideas.',
    },
    {
        imgUrl: 'https://cdn-icons-png.flaticon.com/128/1694/1694262.png',
        imgAlt: 'Thumb',
        title: 'Common goal',
        desc: 'KBF members unite for a shared purpose.',
    },
]

class AboutSection extends Component {
    render() { 
        return (
            <div className="about padding-top padding-bottom">
                <div className="container">
                    <div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
                        <h2>{title}</h2>
                        <p>{subtitle}</p>
                    </div>
                    <div className="section__wrapper">
                        <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
                            {AboutContentList.map((val, i) => (
                                <div className="col wow fadeInUp" data-wow-duration="1.5s" key={i}>
                                    <div className="about__item text-center">
                                        <div className="about__inner">
                                            <div className="about__thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="about__content">
                                                <h4>{val.title}</h4>
                                                <p>{val.desc}</p>
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
 
export default AboutSection;
import { Component } from "react";
import { Link } from "react-router-dom";

const title = "Events";
const desc = "The Kingdom Forum is a truly extraordinary cross-border event that unites and transcends national boundaries, making a profound impact in three diverse and dynamic countries: Zambia, Kenya, and Rwanda.";

let StorySectionContentList = [
    {
        imgUrl: 'kbfMusanze.jpg',
        imgAlt: 'kbf',
        title: 'Kingdom Bussines Forum 2022 Rwanda',
        activity: 'Entertainment',
        authorImg: 'https://images.pexels.com/photos/1291515/pexels-photo-1291515.jpeg?auto=compress&cs=tinysrgb&w=600',
        authorImgAlt: 'author',
        authorName: 'KBF',
        postDate: 'May 15, 2022',
    },
    {
        imgUrl: 'kbfZambia.jpg',
        imgAlt: 'kbf',
        title: 'Kingdom Business Forum 2023 Zambia',
        activity: 'Attraction',
        authorImg: 'https://images.pexels.com/photos/1291515/pexels-photo-1291515.jpeg?auto=compress&cs=tinysrgb&w=600',
        authorImgAlt: 'author',
        authorName: 'KBF',
        postDate: 'May 19, 2023',
    },
    {
        imgUrl: 'kbfKenya.jpg',
        imgAlt: 'kbf',
        title: 'Kingdom Business Forum 2023 Kenya',
        activity: 'Love Stories',
        authorImg: 'https://images.pexels.com/photos/1291515/pexels-photo-1291515.jpeg?auto=compress&cs=tinysrgb&w=600',
        authorImgAlt: 'author',
        authorName: 'KBF',
        postDate: 'May 20, 2023',
    },
]


class StorySection extends Component {
    render() { 
        return (
            <div className="story bg_img padding-top padding-bottom" style={{backgroundImage: "url(/assets/images/bg-img/02.jpg)"}}>
                <div className="container">
                    <div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
                        <h2>{title}</h2>
                        <p>{desc}</p>
                    </div>
                    <div className="section__wrapper wow fadeInUp" data-wow-duration="1.5s">
                        <div className="row g-4 justify-content-center row-cols-lg-3 row-cols-sm-2 row-cols-1">
                            {StorySectionContentList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="story__item">
                                        <div className="story__inner">
                                            <div className="story__thumb">
                                                <Link to="/blog-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                {/* <span className="member__activity member__activity--ofline">{val.activity}</span> */}
                                            </div>
                                            <div className="story__content">
                                                <Link to="/blog-single"><h4>{val.title}</h4></Link>
                                                <div className="story__content--author">
                                                    {/* <div className="story__content--thumb">
                                                        <img src={`${val.authorImg}`} alt={`${val.authorImgAlt}`} />
                                                    </div> */}
                                                    <div className="story__content--content">
                                                        <h6>{val.authorName}</h6>
                                                        <p>{val.postDate}</p>
                                                    </div>
                                                </div>
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
 
export default StorySection;
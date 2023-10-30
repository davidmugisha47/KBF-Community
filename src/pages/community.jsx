import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../component/layout/pageheader";
import Pagination from "../component/section/pagination";
import HeaderOne from "../component/layout/header";
import Footer from "../component/layout/footer";


let StorySectionContentList = [
    {
        imgUrl: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt: 'Dating Thumb',
        title: 'Leaders Community',
        activity: 'Entertainment',
        authorImg: 'assets/images/story/author/01.jpg',
        authorImgAlt: 'Dating Thumb',
    },
    {
        imgUrl: 'Bishop.JPG',
        imgAlt: 'Dating Thumb',
        title: 'Pastors Community',
        activity: 'Attraction',
        authorImg: 'assets/images/story/author/02.jpg',
        authorImgAlt: 'Dating Thumb',
    },
    {
        imgUrl: 'Andrew.JPG',
        imgAlt: 'Dating Thumb',
        title: 'Government Officials Community',
        activity: 'Love Stories',
        authorImg: 'assets/images/story/author/03.jpg',
        authorImgAlt: 'Dating Thumb',
    },
    {
        imgUrl: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt: 'Dating Thumb',
        title: 'Business influencers Community',
        activity: 'Entertainment',
        authorImg: 'assets/images/story/author/01.jpg',
        authorImgAlt: 'Dating Thumb',
    },
    {
        imgUrl: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt: 'Dating Thumb',
        title: 'Young entrepreneurs community',
        activity: 'Attraction',
        authorImg: 'assets/images/story/author/02.jpg',
        authorImgAlt: 'Dating Thumb',
    },
    {
        imgUrl: 'https://images.pexels.com/photos/5060973/pexels-photo-5060973.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt: 'Dating Thumb',
        title: 'Business owners community',
        activity: 'Love Stories',
        authorImg: 'assets/images/story/author/03.jpg',
        authorImgAlt: 'Dating Thumb',
    },
]

class CommunityPage extends Component {
    modalview() {
        document.querySelector('.modal').classList.toggle('show')
        document.querySelector('body').classList.toggle('overlay')
    }
    render() { 
        return (
            <Fragment>
                <HeaderOne />
                <PageHeader title={'Community Page'} curPage={'Community'} />
                <div className="community story padding-top padding-bottom">
                    <div className="container">
                        <div className="section__wrapper">
                            <div className="row g-4 justify-content-center mx-12-none row-cols-lg-3 row-cols-sm-2 row-cols-1">
                                {StorySectionContentList.map((val, i) => (
                                    <div className="col" key={i}>
                                        <div className="story__item">
                                            <div className="story__inner">
                                                <div className="story__thumb">
                                                    <Link to="#"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                    {/* <span className="member__activity member__activity--ofline">{val.activity}</span> */}
                                                </div>
                                                <div className="story__content">
                                                    <Link to="#"><h4>{val.title}</h4></Link>
                                                    {/* <div className="story__content--author">
                                                        <div className="story__content--thumb">
                                                            <img src={`${val.authorImg}`} alt={`${val.authorImgAlt}`} />
                                                        </div>
                                                        <div className="story__content--content">
                                                            <h6>{val.authorName}</h6>
                                                            <p>{val.postDate}</p>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="member__pagination mt-4">
                                <div className="member__pagination--right">
                                    <Pagination />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
 
export default CommunityPage;
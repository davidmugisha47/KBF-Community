import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import PageHeader from "../component/layout/pageheader";
import HeaderOne from "../component/layout/header";


let BlogContentListThree = [
    {
        imgUrl: 'https://img.freepik.com/free-photo/toy-bricks-table-with-word-faith_144627-47474.jpg?w=2000',
        imgAlt: 'Blog Thumb',
        title: 'Faith driven entrepreneurship.',
        desc: 'Unique proces ariwith tactica ramatica are centered quatys vectoris with scenario to front-end niches after one',
        btnText: 'read more',
        pubDate: '15 May 2022',
        pubAuthor: 'David Pallock',
    },
    {
        imgUrl: 'https://images.pexels.com/photos/284951/pexels-photo-284951.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt: 'Blog Thumb',
        title: 'Businesses into the Kingdom.',
        desc: 'Unique proces ariwith tactica ramatica are centered quatys vectoris with scenario to front-end niches after one',
        btnText: 'read more',
        pubDate: '1 June 2021',
        pubAuthor: 'Joel Gasare',
    },
    {
        imgUrl: 'https://images.pexels.com/photos/3978594/pexels-photo-3978594.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt: 'Blog Thumb',
        title: 'On earth as it is in heaven.',
        desc: 'Unique proces ariwith tactica ramatica are centered quatys vectoris with scenario to front-end niches after one',
        btnText: 'read more',
        pubDate: '19 September 2022',
        pubAuthor: 'David Mugisha',
    },
    {
        imgUrl: 'https://images.pexels.com/photos/193821/pexels-photo-193821.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt: 'Blog Thumb',
        title: 'Business with Excellence.',
        desc: 'Unique proces ariwith tactica ramatica are centered quatys vectoris with scenario to front-end niches after one',
        btnText: 'read more',
        pubDate: '10 January 2023',
        pubAuthor: 'Christian Sunzu',
    },
    {
        imgUrl: 'https://images.pexels.com/photos/4386421/pexels-photo-4386421.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt: 'Blog Thumb',
        title: 'Worshiping with our riches.',
        desc: 'Unique proces ariwith tactica ramatica are centered quatys vectoris with scenario to front-end niches after one',
        btnText: 'read more',
        pubDate: '30 November 2022',
        pubAuthor: 'Kevin Ishimwe',
    },
    {
        imgUrl: 'https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt: 'Blog Thumb',
        title: 'Blessed and unstoppable',
        desc: 'Unique proces ariwith tactica ramatica are centered quatys vectoris with scenario to front-end niches after one',
        btnText: 'read more',
        pubDate: '15 May 2022',
        pubAuthor: 'Ange Gardien',
    },
]


class BlogPage extends Component {
    render() { 
        return (
            <Fragment>
                <HeaderOne />
                <PageHeader title={'Our Blog Post'} curPage={'Blog'} />
                <div className="blog-section padding-top padding-bottom">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="row g-4 justify-content-center">
                                {BlogContentListThree.map((val, i) => (
                                    <div className="col-xl-4 col-md-6 col-12" key={i}>
                                        <div className="blog__item">
                                            <div className="blog__inner">
                                                <div className="blog__thumb">
                                                    <Link to="/blog-single">
                                                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="w-100" />
                                                    </Link>
                                                </div>
                                                <div className="blog__content px-3 py-4">
                                                    <Link to="/blog-single"><h3>{val.title}</h3></Link>
                                                    <div className="blog__metapost">
                                                        <a href="#">{val.pubAuthor}</a>
                                                        <a href="#">{val.pubDate}</a>
                                                    </div>
                                                    <p>{val.desc}</p>
                                                    <Link to="/blog-single" className="default-btn"><span>{val.btnText}</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
 
export default BlogPage;
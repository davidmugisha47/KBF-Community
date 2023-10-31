import { Component } from "react";
import { Link } from "react-router-dom";

const title = "Recent Post";


let RecentPostList = [
    {
        imgUrl: 'https://images.pexels.com/photos/698899/pexels-photo-698899.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt: 'recent post thumb',
        title: 'Poor People’s Campaign Our Resources',
        pubDate: '15 May 2022',
    },
    {
        imgUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt: 'recent post thumb',
        title: 'Boosting Social For NGO And Charities',
        pubDate: '15 May 2022',
    },
    {
        imgUrl: 'https://images.pexels.com/photos/1104007/pexels-photo-1104007.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt: 'recent post thumb',
        title: 'Poor People’s Campaign Our Resources',
        pubDate: '15 May 2022',
    },
    {
        imgUrl: 'https://images.pexels.com/photos/2923156/pexels-photo-2923156.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt: 'recent post thumb',
        title: 'Boosting Social For NGO And Charities',
        pubDate: '15 May 2022',
    },
]


class RecentPost extends Component {
    render() { 
        return (
            <div className="widget widget-post">
                <div className="widget-header">
                    <h5>{title}</h5>
                </div>
                <ul className="lab-ul widget-wrapper">
                    {RecentPostList.map((val, i) => (
                        <li className="d-flex flex-wrap justify-content-between" key={i}>
                            <div className="post-thumb">
                                <Link to="/blog-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                            </div>
                            <div className="post-content ps-4">
                                <Link to="/blog-single">
                                    <h6>{val.title}</h6>
                                </Link>
                                <p>{val.pubDate}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
 
export default RecentPost;
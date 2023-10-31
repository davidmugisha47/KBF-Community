import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import PageHeader from "../component/layout/pageheader";
import Author from "../component/section/author";
import CommentForm from "../component/section/commentform";
import Comments from "../component/section/comments";
import Archive from "../component/sidebar/archive";
import CategorieTwo from "../component/sidebar/categorietwo";
import Instagram from "../component/sidebar/instagram";
import RecentPost from "../component/sidebar/recentpost";
import Tags from "../component/sidebar/tags";
import HeaderOne from "../component/layout/header";


class BlogDetails extends Component {
    render() { 
        return (
            <Fragment>
                <HeaderOne />
                <PageHeader title={'Blog Details'} curPage={'Blog Details'} />
                <div className="blog blog--style2 padding-top padding-bottom aside-bg">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="row justify-content-center pb-15">
                                <div className="col-lg-9 col-12">
                                    <article>
                                        <div className="blog__item">
                                            <div className="blog__inner">
                                                <div className="blog__thumb">
                                                    <img src="https://img.freepik.com/free-photo/toy-bricks-table-with-word-faith_144627-47474.jpg?w=2000" alt="blog" />
                                                </div>
                                                <div className="blog__content">
                                                    <h2>Faith driven entrepreneurs</h2>
                                                    <ul className="blog__date">
                                                        <li><span><i className="fa-solid fa-calendar-days"></i>January 01, 2022 10:59 am </span></li>
                                                        <li><span><i className="fa-solid fa-user"></i><a href="#">David Pallock</a></span></li>
                                                        <li><span><i className="fa-solid fa-comments"></i><a href="#">09 Comments</a></span></li>
                                                    </ul>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                    <div className="blog__thumb mb-4">
                                                        <iframe width="930" height="523" src="https://www.youtube.com/embed/K0TIVQsFC-Q" title="What is the Faith Driven Entrepreneur?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                    </div>

                                                    <div className="tags-area">
                                                        <ul className="tags lab-ul justify-content-center">
                                                            <li>
                                                                <a href="#">Charity</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="active">NoneProfit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Admission</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="share lab-ul justify-content-center">
                                                            <li>
                                                                <a href="#" className="facebook"><i className="fa-brands fa-facebook-f"></i></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="dribble"><i className="fa-brands fa-dribbble"></i></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="twitter"><i className="fa-brands fa-twitter"></i></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="google"><i className="fa-brands fa-google"></i></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="article-pagination">
                                            <div className="prev-article">
                                                <a href="#"><i className="icofont-rounded-double-left"></i>Previous Article</a>
                                            </div>
                                            <div className="next-article">
                                                <a href="#">Next Article <i className="icofont-rounded-double-right"></i></a>
                                            </div>
                                        </div>
                                        <Author />
                                        <Comments />
                                        <CommentForm />
                                    </article>
                                </div>
                                <div className="col-lg-3 col-md-7 col-12">
						            <aside>
                                        <RecentPost />
                                        <CategorieTwo />
                                        <Archive />
                                    </aside>
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
 
export default BlogDetails;
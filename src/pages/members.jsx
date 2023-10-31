import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../component/layout/pageheader";
import AboutSectionFour from "../component/section/aboutfour";
import SelectProduct from "../component/select/selectproduct";
import HeaderOne from "../component/layout/header";
import Footer from "../component/layout/footer";


let MemberContentList = [
    {
        imgUrl: 'assets/images/member/home2/01.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Lorem Ipsum',
        activity: 'CEO of Btechnology',
        className: 'member__activity',
    },
    {
        imgUrl: 'assets/images/member/home2/02.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Lorem Ipsum',
        activity: 'Entrepreneur',
        className: 'member__activity member__activity--ofline',
    },
    {
        imgUrl: 'assets/images/member/home2/03.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Lorem Ipsum',
        activity: 'Pastor',
        className: 'member__activity',
    },
    {
        imgUrl: 'assets/images/member/home2/04.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Lorem Ipsum',
        activity: 'Mayor',
        className: 'member__activity',
    },
    {
        imgUrl: 'assets/images/member/home2/05.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Lorem Ipsum',
        activity: 'Enterpreneur',
        className: 'member__activity member__activity--ofline',
    },
    {
        imgUrl: 'assets/images/member/home2/06.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Lorem Ipsum',
        activity: 'Pastor',
        className: 'member__activity',
    },
    {
        imgUrl: 'assets/images/member/home2/07.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Lorem Ipsum',
        activity: 'CEO',
        className: 'member__activity',
    },
    {
        imgUrl: 'assets/images/member/home2/08.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Lorem Ipsum',
        activity: 'Market researcher',
        className: 'member__activity',
    },
    {
        imgUrl: 'assets/images/member/home2/09.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Lorem Ipsum',
        activity: 'Governor',
        className: 'member__activity member__activity--ofline',
    },
    {
        imgUrl: 'assets/images/member/home2/10.jpg',
        imgAlt: 'Dating Thumb',
        title: 'Lorem Ipsum',
        activity: 'Pastor',
        className: 'member__activity',
    },
]


class MembersPage extends Component {
    modalview() {
        document.querySelector('.modal').classList.toggle('show')
        document.querySelector('body').classList.toggle('overlay')
    }
    render() { 
        return (
            <Fragment>
                <HeaderOne />
                <PageHeader title={'KBF Members'} curPage={'All Members'} />
                <div className="member member--style2 padding-top padding-bottom">
                    <div className="container">
                        <div className="section__wrapper">
                            <div className="row g-0 justify-content-center mx-12-none">
                                {MemberContentList.map((val, i) => (
                                    <div className="member__item" key={i}>
                                        <div className="member__inner">
                                            <div className="member__thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="member__content">
                                                <Link to="/member-single"><h5>{val.title}</h5></Link>
                                                <p>{val.activity}</p>
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
 
export default MembersPage;
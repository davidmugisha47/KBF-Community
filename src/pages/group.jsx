import { Component, Fragment } from "react";
import PageHeader from "../component/layout/pageheader";
import Pagination from "../component/section/pagination";
import { Link } from "react-router-dom";
import HeaderOne from "../component/layout/header";
import Footer from "../component/layout/footer";


let GroupPageContentList = [
    {
        imgUrl: 'kbfMusanze.JPG',
        imgAlt: 'Dating Thumb',
        title: 'KBF Rwanda',
        desc: 'Kingdom Business Forum Rwandan Community.',
        activety: '2 days ago',
        group: 'Public Group',
        moreMember: '12+',
        groupMemList: [
            {
                imgUrl: 'assets/images/group/icon/01.png',
                imgAlt: 'Dating Thumb',
                name: 'Klaus Klug',
            },
            {
                imgUrl: 'assets/images/group/icon/02.png',
                imgAlt: 'Dating Thumb',
                name: 'Mary C. Shen',
            },
            {
                imgUrl: 'assets/images/group/icon/03.png',
                imgAlt: 'Dating Thumb',
                name: 'Lucas Vogler',
            },
            {
                imgUrl: 'assets/images/group/icon/04.png',
                imgAlt: 'Dating Thumb',
                name: 'Manuela Moench',
            },
            {
                imgUrl: 'assets/images/group/icon/05.png',
                imgAlt: 'Dating Thumb',
                name: 'Matthias Propst',
            },
        ]
    },
    {
        imgUrl: 'kbfUganda.JPG',
        imgAlt: 'Dating Thumb',
        title: 'KBF Uganda',
        desc: 'Kingdom Business Forum Ugandan Community.',
        activety: '2 days ago',
        group: 'Public Group',
        moreMember: '14+',
        groupMemList: [
            {
                imgUrl: 'assets/images/group/icon/06.png',
                imgAlt: 'Dating Thumb',
                name: 'Klaus Klug',
            },
            {
                imgUrl: 'assets/images/group/icon/07.png',
                imgAlt: 'Dating Thumb',
                name: 'Mary C. Shen',
            },
            {
                imgUrl: 'assets/images/group/icon/08.png',
                imgAlt: 'Dating Thumb',
                name: 'Lucas Vogler',
            },
            {
                imgUrl: 'assets/images/group/icon/09.png',
                imgAlt: 'Dating Thumb',
                name: 'Manuela Moench',
            },
            {
                imgUrl: 'assets/images/group/icon/10.png',
                imgAlt: 'Dating Thumb',
                name: 'Matthias Propst',
            },
        ]
    },
    {
        imgUrl: 'kbfZambia.JPG',
        imgAlt: 'Dating Thumb',
        title: 'KBF Zambia',
        desc: 'Kingdom Business Forum Zambian Community.',
        activety: '2 days ago',
        group: 'Public Group',
        moreMember: '30+',
        groupMemList: [
            {
                imgUrl: 'assets/images/group/icon/01.png',
                imgAlt: 'Dating Thumb',
                name: 'Klaus Klug',
            },
            {
                imgUrl: 'assets/images/group/icon/03.png',
                imgAlt: 'Dating Thumb',
                name: 'Mary C. Shen',
            },
            {
                imgUrl: 'assets/images/group/icon/08.png',
                imgAlt: 'Dating Thumb',
                name: 'Lucas Vogler',
            },
            {
                imgUrl: 'assets/images/group/icon/02.png',
                imgAlt: 'Dating Thumb',
                name: 'Manuela Moench',
            },
            {
                imgUrl: 'assets/images/group/icon/07.png',
                imgAlt: 'Dating Thumb',
                name: 'Matthias Propst',
            },
        ]
    },
    {
        imgUrl: 'kbfKenya.JPG',
        imgAlt: 'Dating Thumb',
        title: 'KBF Kenya',
        desc: 'Kingdom Business Forum Kenyan Community.',
        activety: '2 days ago',
        group: 'Public Group',
        moreMember: '25+',
        groupMemList: [
            {
                imgUrl: 'assets/images/group/icon/09.png',
                imgAlt: 'Dating Thumb',
                name: 'Klaus Klug',
            },
            {
                imgUrl: 'assets/images/group/icon/05.png',
                imgAlt: 'Dating Thumb',
                name: 'Mary C. Shen',
            },
            {
                imgUrl: 'assets/images/group/icon/03.png',
                imgAlt: 'Dating Thumb',
                name: 'Lucas Vogler',
            },
            {
                imgUrl: 'assets/images/group/icon/07.png',
                imgAlt: 'Dating Thumb',
                name: 'Manuela Moench',
            },
            {
                imgUrl: 'assets/images/group/icon/01.png',
                imgAlt: 'Dating Thumb',
                name: 'Matthias Propst',
            },
        ]
    },

]

class GroupPage extends Component {
    modalview() {
        document.querySelector('.modal').classList.toggle('show')
        document.querySelector('body').classList.toggle('overlay')
    }
    render() { 
        return (
            <Fragment>
                <HeaderOne />
                <PageHeader title={'KBF Groups'} curPage={'Groups'} />
                <div className="member story story--style2 padding-top padding-bottom overflow-hidden">
                    <div className="container">
                        <div className="section__wrapper">
                            <div className="row g-4 justify-content-center row-cols-lg-4 row-cols-sm-2 row-cols-1">
                                {GroupPageContentList.map((val, i) => (
                                    <div className="col" key={i}>
                                        <div className="story__item style2 story--theme-color">
                                            <div className="story__inner">
                                                <div className="story__thumb position-relative">
                                                    <Link to="/group-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                </div>
                                                <div className="story__content px-0 pb-0">
                                                    <Link to="/group-single"><h4>{val.title}</h4></Link>
                                                    <p>{val.desc}</p>
                                                    <div className="story__content--author justify-content-between border-top pt-3">
                                                        <div className="story__content--content">
                                                            <p><i className="fa-solid fa-earth-africa"></i> {val.group}</p>
                                                        </div>
                                                        <ul className="img-stack">
                                                            {val.groupMemList.map((val, i) => (
                                                                <li key={i}>
                                                                    <Link to="/member-single">
                                                                        <img src={val.imgUrl} alt={val.imgAlt} />
                                                                        <div className="time-tooltip">
                                                                            <div className="time-tooltip-holder">
                                                                                <span className="tooltip-info">{val.name}</span>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                            <li className="bg-theme">
                                                                <Link to="/member-single">
                                                                    {val.moreMember}
                                                                    <div className="time-tooltip">
                                                                        <div className="time-tooltip-holder">
                                                                            <span className="tooltip-info">More</span>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
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
 
export default GroupPage;
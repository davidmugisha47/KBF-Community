import { Component, useState } from "react";
import { Link } from "react-router-dom";

const title = "Our leaders";
const desc = "Presently, these distinguished individuals hold the esteemed positions of leadership within the Kingdom Business Forum.";

let MemberDataList = [
    {
        id: 1,
        imgUrl: 'https://images.pexels.com/photos/1291515/pexels-photo-1291515.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt: 'KBF Member',
        activity: 'Online',
        name: 'Lorem Ipsum',
        age: 'Lorem Ipsum',
        catagory: 'male',
    },
    {
        id: 2,
        imgUrl: 'https://images.pexels.com/photos/1291515/pexels-photo-1291515.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt: 'KBF Member',
        activity: 'Online',
        name: 'Lorem Ipsum',
        age: 'Lorem Ipsum',
        catagory: 'female',
    },
    {
        id: 3,
        imgUrl: 'https://images.pexels.com/photos/1291515/pexels-photo-1291515.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt: 'KBF Member',
        activity: 'Online',
        name: 'Lorem Ipsum',
        age: 'Lorem Ipsum',
        catagory: 'male',
    },
    {
        id: 4,
        imgUrl: 'https://images.pexels.com/photos/1291515/pexels-photo-1291515.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt: 'KBF Member',
        activity: 'Online',
        name: 'Lorem Ipsum',
        age: 'Lorem Ipsum',
        catagory: 'female',
    },
    {
        id: 5,
        imgUrl: 'https://images.pexels.com/photos/1291515/pexels-photo-1291515.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt: 'KBF Member',
        activity: 'Online',
        name: 'Lorem Ipsum',
        age: 'Lorem Ipsum',
        catagory: 'male',
    },
]

const MemberSection = () => {

    const [items, setItems] = useState(MemberDataList);
    const filterItem = (categItem) => {
        const updateItems = MemberDataList.filter((curElem) => {
            return curElem.catagory === categItem;
        });
        setItems(updateItems);
    }
    return (
        <div className="member padding-top padding-bottom overflow-hidden">
            <div className="container">
                <div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
                <div className="section__wrapper wow fadeInUp" data-wow-duration="1.5s">

                    <div className="member__grid d-flex flex-wrap justify-content-center mx-12-none">
                        {
                            items.map((elem) => {
                            const { id, imgUrl, imgAlt, activity, name, age } = elem;
                                return (
                                    <div className="member__item male" key={id}>
                                        <div className="member__inner">
                                            <div className="member__thumb">
                                                <img src={`${imgUrl}`} alt={`${imgAlt}`} />
                                                {/* <span className="member__activity">{activity}</span> */}
                                            </div>
                                            <div className="member__content">
                                                <Link to="/member-single"><h5>{name}</h5></Link>
                                                <p>{age}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default MemberSection;
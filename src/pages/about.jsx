import { Component, Fragment } from "react";
import FooterThree from "../component/layout/footerthree";
import PageHeader from "../component/layout/pageheader";
import AboutSection from "../component/section/about";
import AboutSectionSix from "../component/section/aboutsix";
import StorySection from "../component/section/story";
import WorkSectionTwo from "../component/section/worktwo";
import AppSectionTwo from "../component/section/appsectiontwo";
import HeaderOne from "../component/layout/header";

class AboutPage extends Component {
    render() { 
        return (
            <Fragment>
                <HeaderOne />
                <PageHeader title={'About Our Ollya'} curPage={'About Us'} />
                <AboutSectionSix />
                <StorySection />
                <AboutSection />
				<WorkSectionTwo />
				<AppSectionTwo />
				<FooterThree />
            </Fragment>
        );
    }
}
 
export default AboutPage;
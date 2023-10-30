import { Component } from "react";
import { Link } from "react-router-dom";
import SelectMarid from "../component/select/selectmarid";

const title = "Welcome to Kingdom Business Forum";
const desc = "Let's create your profile! Just fill in the fields below, and we’ll get you a new account.";
const accTitle = "Acount Details";

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            regName: '',
            regEmail: '',
            regPassword: '',
            regConPassword: '',
        };
    }
    render() { 
        return (
            <section className="log-reg">
                <div className="top-menu-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-7">
                                <div className="logo">
                                    <Link to="/"><img src="KBF shadowed (1).png" alt="logo" height= "80px" width= "80px"/></Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-5">
                                <Link to="/" className="backto-home"><i className="fas fa-chevron-left"></i> Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="ima"></div>
                        <div className="col-lg-7">
                            <div className="log-reg-inner">
                                <div className="section-header">
                                    <h2 className="title">{title} </h2>
                                    <p>{desc} </p>
                                </div>
                                <div className="main-content">
                                    <form action="#">
                                        <h4 className="content-title">{accTitle}</h4>
                                        <div className="form-group">
                                            <label>Email Address*</label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="item02"
                                                value={this.state.regEmail}
                                                onChange={(e)=>{this.setState({regEmail: e.target.value});}}
                                                placeholder="Enter Your Email *"
                                                className="my-form-control"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Password*</label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="item03"
                                                value={this.state.regPassword}
                                                onChange={(e)=>{this.setState({regPassword: e.target.value});}}
                                                placeholder="Enter Your Password *"
                                                className="my-form-control"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Confirm Password*</label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="item04"
                                                value={this.state.regConPassword}
                                                onChange={(e)=>{this.setState({regConPassword: e.target.value});}}
                                                placeholder="Enter Your Password *"
                                                className="my-form-control"
                                            />
                                        </div>
                                        <h4 className="content-title mt-5">Profile Details</h4>
                                        <div className="form-group">
                                            <label>Name*</label>
                                            <input type="text" className="my-form-control" placeholder="Enter Your Full Name" />
                                        </div>
                                        <div className="form-group">
                                            <label>I am a</label>
                                            <div className="banner__inputlist">
                                                <div className="s-input me-3">
                                                    <input type="radio" name="gender1" id="males1" />
                                                    <label htmlFor="males1">Leader</label>
                                                </div>
                                                <div className="s-input">
                                                    <input type="radio" name="gender1" id="females1" />
                                                    <label htmlFor="females1">Business owner</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Country</label>
                                            <input type="text" className="my-form-control" placeholder="Enter Your Country name" />
                                        </div>
                                        <button className="default-btn reverse"><span>Create Your Profile</span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default SignUp;
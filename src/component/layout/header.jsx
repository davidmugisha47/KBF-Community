import { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class HeaderOne extends Component {
    render() { 
        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 200) {
                document.querySelector('.header').classList.add(['header-fixed'], ['animated'], ['fadeInDown'])
            }else{
                document.querySelector('.header').classList.remove(['header-fixed'], ['animated'], ['fadeInDown'])
            }
        });
        return (
            <header className="header" id="navbar">
                <div className="header__bottom">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg">
                            <Link className="navbar-brand" to="/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAC6urqIiIjPz89eXl7X19dUVFQzMzOwsLDj4+P8/PwEBAQhISHg4ODMzMydnZ3q6uqBgYF1dXXCwsKlpaXx8fFiYmKxsbGXl5cTExNZWVlGRkZqamrFxcUiIiIvLy84ODhMTEw+Pj4wMDBpaWmOjo4JhToUAAAFCElEQVR4nO2b7VrqOhBGEygVTaEIFgHdgqLc/yWeAvmCJJMIZzc953nXP61Ns5p0OplUxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHyIG4/lR7CyrouiqMv0Uxyj6bEFH+Uy2toydK5D/fw7Nc0DP/FO/9WMVxK+dg7OeZDNaDYlGy7C517zeKPh6Hz6Q/APjmO2IK8zpHu2a0R4Jpd9MGTizVym8HQ2YtiO5CDYeh8M2XKsLzJ58v1B1JDzRWgUsxu2U7Ss9DXe/ZEjwZD/CVw+vyH7MJd49QVSy3C7nWi2G6tvxwA17KVhq9OYKwT6qA0/r88uV1aE4rV3oirD12GMef0XDM2LoJ2pTbAJaTj2HBKNbmBHGr7c0vc0yDEcmSH4CDdBGDL2tOXyQV75DivDcLS9G8Jw+akHYEO9tylDwZ7VPbqexSeyGk65uvv8m0y/SEPBVkrRd5fyGQr2ogawOgZRCnKWtqiw6nuSM45hY0ZwHmkiZrgg2slnmBREJTHDmWxr4TmWzfCVa4ggKokZPsqWfC/UTIbLfTt2lQoP3jzGJma47tlzKNjUZKLj+Bo2bvhDzIYMhiaItoySKhQRQ6Fao3KaLsfQykSPwS/BkTQUOjH3Li+6NmwfOaskEQ2iEnoMB6o5b1rU+RiKHyOYnAyThjLMVO2EyD9LhclE2+U8XUGyIQxrXR8IlLo6NWyD6EbnMedfpBEyfG7MDQtltt2OYc1thr813D1NFWXxMlt8Wo0F6h8drw+tIHoinsxI4nUat8aqUIbz1WMIb/XrFkO3nylve8uwujjZ/FStiYbOhtXluZfcO7zK8A9X19psZdNfifOUHsNTNnpPRTh5LtGG6qZXfLsslOssrYnYLJ0TmyJdGkrLB2FtRKTt18Sfw723RpPH8LSGEzv58/Y3eSnJ9sW/RunasA164tiR8kI40XB84SCWRWParkJV7wTDfynSnHuh37sHsgQYMnQQq73p6d4XcJThuqjr2reXWN+8b6iwx7A0o/CtfpfQvjT89h4cmPL+D2FI5DT37jEbw52REcdS4nlcvVXOS+i1hXjQ70aPhnwfdpC1cf52uY+pM5zgdoUmtsbXl5i4x7rLS08xxQ4Uavs7IZbF1vhioppyg0Z3hl/OgaWevrHsLTaGJqV3S8tZq/q6Gv8WaSJqyFRE3ThRI+/OzKuMArHsLW6oasLcWSdk3nvS87QkQ3bcUH9T4jzTWQ2tuuLkTsMpD4nkHUPrOxoye/svG5o4T/Ugblj21VBYpRsie4sbqr0ZXlwfyT2GVoXiPfwoxg31R1XOfcpvyHbSkB+CTUQN9WO4cw71wNDs5tehfbZY1mYSQPcu9cDQvK2D2VvqHrBv66IPhuxd9S+UvUUMD1w9y2/us9wLQ/1BTGgzijT8sFb5ntpuHwyFifWB2puu6l9R1s2ismrD69vW+PcSH0NmIsXOG2pSam2Vb+nEemNo5qk3e0sx5HzUg/3DMHof19uTJMOhv6TUF0P9OYU3e4sYHp/DsZOuSXpiKMz3FL693OgYfg2CNcEODGXK6NZpLjEp+PXXaYL6fwvO94sVVef564aCNcPD4TAcRgoVgpkNXnF9qBz4+SjKaD35edYcifzfCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP+UfwCTjzXIm729mgAAAABJRU5ErkJggg==" height= "20%" width= "20%" alt="logo" /></Link>
                            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler--icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                                <div className="navbar-nav mainmenu">
                                    <ul>
                                        <li className="menu-item-has-children">
                                        <li><NavLink to="/">Home</NavLink></li>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Pages</a>
                                            <ul className="dropdown-menu">
                                                <li><NavLink to="/about">About Us</NavLink></li>
                                                <li><NavLink to="/membership">Membership</NavLink></li>
                                                <li><NavLink to="/comingsoon">comingsoon</NavLink></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Community</a>
                                            <ul className="dropdown-menu">
                                                <li><NavLink to="/community">Community</NavLink></li>
                                                <li><NavLink to="/group">All Group</NavLink></li>
                                                <li><NavLink to="/members">All Members</NavLink></li>
                                                <li><NavLink to="/activity">Activity</NavLink></li>

                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Shops</a>
                                            <ul className="dropdown-menu">
                                                <li><NavLink to="/shop">Product</NavLink></li>
                                                <li><NavLink to="/shop-single">Product Details</NavLink></li>
                                                <li><NavLink to="/shop-cart">Product Cart</NavLink></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Blogs</a>
                                            <ul className="dropdown-menu">
                                                <li><NavLink to="/blog">Blog</NavLink></li>
                                            </ul>
                                        </li>
                                        <li><NavLink to="/contact">contact</NavLink></li>
                                    </ul>
                                </div>
                                <div className="header__more">
                                    <button className="default-btn dropdown-toggle" type="button" id="moreoption" data-bs-toggle="dropdown" aria-expanded="false">My Account</button>
                                    <ul className="dropdown-menu" aria-labelledby="moreoption">
                                        <li><Link className="dropdown-item" to="/login">Log In</Link></li>
                                        <li><Link className="dropdown-item" to="/register">Sign Up</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}
 
export default HeaderOne;
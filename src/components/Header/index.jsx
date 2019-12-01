import React from "react";
import {Avatar} from "antd";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './style.css';

function Header ({user}){
    return(
        <header id="mainHeader">
            <section>
                <div className="title">
                    <span>Timetable</span>
                </div>

                <nav>
                    <ul>
                        <li><Link to="/">Головна</Link></li>
                        <li><Link to="/today">Розклад на сьогодні</Link></li>
                        <li><Link to="/tomorrow">Розклад на завтра</Link></li>
                    </ul>
                </nav>

                <div className = "authorization">
                    <Link to="autorization">
                        <Avatar icon="user" />        
                    </Link>
                </div>
            </section>
        </header>
    );
}

export default connect (state =>({
    user: state.user
}),{})(Header);
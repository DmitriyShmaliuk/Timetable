import React from "react";
import {Link} from 'react-router-dom';
import './style.css';

function Header (){
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
                    Увійти
                </div>
            </section>
        </header>
    );
}

export default Header;
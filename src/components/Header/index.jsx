import React from "react";
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
                        <li>Головна</li>
                        <li>Розклад на сьогодні</li>
                        <li>Розклад на завтра</li>
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
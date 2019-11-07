import React from "react";
import Header from "../Header/index";
import './style.css';

function Home ({children}){
    return(
        <div className="app">
            <Header />
            
            <div className="body">
                {children}
            </div>
        </div>
    );
};

export default Home;
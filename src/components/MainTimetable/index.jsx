import React from 'react';
import {Day} from "../Day/index";
import "./style.css";

function MainTimetable(){
    return(
        <div className="content"> 
           <Day dayOfWeek = "Понеділок"/>
           <Day dayOfWeek = "Віторок"/>
           <Day dayOfWeek = "Середа"/>
           <Day dayOfWeek = "Четвер"/>
           <Day dayOfWeek = "П'ятниця"/>
        </div>
    );
}

export default MainTimetable;
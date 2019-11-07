import React from "react";
import {Group} from "../Group/index";
import './style.css';

export function Day({dayOfWeek}){
    return (
        <div className="day">
             <div>
                <h2>{dayOfWeek}</h2>
             </div>

             <div className="table">
                <Group name = "П-21"/>
                <Group name = "П-22"/>
                <Group name = "П-31"/>
                <Group name = "П-32"/>
                <Group name = "П-41"/>
                <Group name = "П-42"/>
             </div>
        </div>
    );
}
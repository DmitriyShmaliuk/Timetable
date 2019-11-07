import React from "react";
import "./style.css";

export function Group({name}){
    return (
        <div className = "group">
            <div className = "header">{name}</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}
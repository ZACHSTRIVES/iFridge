import React from "react";
import img from "../../static/img/noFridge.svg"

const NoFridegContent = ()=>{
    return(
        <div className="content noFridgeContent">
            <img src={img} className="noFridgeContent-img"></img>
            <div className="noFridgeContent-text"> You don't have any refrigerators yet, go add one! </div>

        </div>
    )
}


export default NoFridegContent;
import { IconButton } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React from "react";
import FoodCol from "./foodCol";
import "./foodTable.css"


const FoodTable = () => {
    return (
        <div className="foodTable">
            <div className="foodTable-title">
                <div className="subTitle">All Foods</div>
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <Add />
                </IconButton>

            </div>
            <div className="table">
                <FoodCol></FoodCol>
                <FoodCol></FoodCol>
                <FoodCol></FoodCol>
                <FoodCol></FoodCol>
                <FoodCol></FoodCol>
                <FoodCol></FoodCol>
                <FoodCol></FoodCol>
                <FoodCol></FoodCol>
                <FoodCol></FoodCol>
                <FoodCol></FoodCol>
                <FoodCol></FoodCol>
                <FoodCol></FoodCol>
                <FoodCol></FoodCol>
            </div>

        </div>
    )
}



export default FoodTable;
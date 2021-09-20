import { IconButton } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React from "react";
import FoodCol from "./foodCol";
import AddFoodDialog from "./addFoodDialog";
import "./foodTable.css"

export interface FoodTableProps {
    foods: any
    refetch: any
    fridgeID:String
}

function getDiffDate(targetDate: any) {
    let date1 = new Date(targetDate);
    let date2 = new Date();
    date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
    date2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
    const diff = date1.getTime() - date2.getTime();
    const diffDate = diff / (24 * 60 * 60 * 1000) - 1;
    return diffDate;
}



const FoodTable: React.FC<FoodTableProps> = ({ foods, refetch,fridgeID }) => {
    const [open,setOpen]=React.useState(false)

    const handleOpen = ()=>{
        setOpen(true);
    } 
    const handleClose = ()=>{
        setOpen(false);
    } 


    return (
        <div className="foodTable">
            <div className="foodTable-title">
                <div className="subTitle">All Food</div>
                <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleOpen}>
                    <Add />
                </IconButton>

            </div>
            <div className="table">
                {foods.map((food: any) => {
                    let expireDate = Math.floor(getDiffDate(food.expireDate));

                    return (<FoodCol food={food} refetch={refetch} expireDate={expireDate}></FoodCol>)


                })}



            </div>

            <AddFoodDialog open={open} refetch={refetch} handleClose={handleClose} fridgeID={fridgeID}></AddFoodDialog>

        </div>
    )
}



export default FoodTable;
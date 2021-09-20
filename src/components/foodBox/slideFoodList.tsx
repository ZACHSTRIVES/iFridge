import React from "react";
import FoodBox from "./foodBox";
import './food.css'


export interface SlideFoodListProps {
    foods: any
    refetch: any
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


const SlideFoodList: React.FC<SlideFoodListProps> = ({ foods, refetch }) => {
    return (
        <div className="slideFoodList">

            {foods.map((food: any) => {
                let expireDate = Math.floor(getDiffDate(food.expireDate));
                if (expireDate >= 0) {
                    return (<FoodBox food={food} refetch={refetch} expireDate={expireDate}></FoodBox>)

                }
            })}


        </div>
    )

}




export default SlideFoodList;
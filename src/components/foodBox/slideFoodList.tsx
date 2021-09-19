import React from "react";
import FoodBox from "./foodBox";
import './food.css'


export interface SlideFoodListProps {
    foods:any
    refetch:any
}


const SlideFoodList: React.FC<SlideFoodListProps> = ({ foods,refetch}) => {
    return(
        <div className="slideFoodList">       
           {foods.map((food:any)=>(<FoodBox food={food} refetch={refetch}></FoodBox>))}
        </div>
    )

}




export default SlideFoodList;
import React from "react";
import './food.css'
import { Box, LinearProgress } from "@material-ui/core";


export interface FoodBoxProps {
    food: any
    refetch: any
}
function getDiffDate(targetDate: any) {
    let date1 = new Date(targetDate);
    let date2 = new Date();
    date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
    date2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
    console.log(date1, date2)
    const diff = date1.getTime() - date2.getTime();
    const diffDate = diff / (24 * 60 * 60 * 1000) - 1;
    return diffDate;
}

const FoodBox: React.FC<FoodBoxProps> = ({ food, refetch }) => {
    const imge = require(`../../static/foods/${food.type}/${food.name}.png`).default
    const expireDate = getDiffDate(food.expireDate);
    console.log(expireDate)

    return (
        <div className="foodBox">
            <div className="foodBox-title">{food.name}</div>

            {() => {
                if (expireDate === 0) {
                    return (
                        <div className="foodBox-desc">
                            Expire today
                        </div>
                    )
                } else if (expireDate === -1) {
                    <div className="foodBox-desc">
                        Expired yesterday
                    </div>

                }
            }}

            <img className="foodBox-foodImg" src={imge}></img>
            <div className="foodBox-progress">
                <Box sx={{ width: '100%' }}>
                    <LinearProgress variant="buffer" value={50} valueBuffer={60} />
                </Box>
            </div>
        </div>
    )
}



export default FoodBox;
import React from "react";
import './food.css'
import image from '../../static/foods/MEATS/BEEF.png'
import { Box, LinearProgress } from "@material-ui/core";



const FoodBox = () => {
    return (
        <div className="foodBox">
            <div className="foodBox-title">Beef</div>
            <div className="foodBox-desc">
                Meat · 2 days left
            </div>
            <img className="foodBox-foodImg" src={image}></img>
            <div className="foodBox-progress">
            <Box sx={{ width: '100%' }}>
                <LinearProgress variant="buffer" value={50} valueBuffer={60} />
            </Box>
            </div>



        </div>
    )
}



export default FoodBox;
import { Box, IconButton, LinearProgress } from "@material-ui/core";
import { Add,Remove,DeleteForever } from "@material-ui/icons";
import React from "react"
import image from '../../static/foods/Meat/BEEF.png'

const FoodCol = () => {
    return (
        <div className="foodCol">
            <img className="foodCol-img" src={image}></img>
            <div className="foodCol-stats">
                <div>
                    <a className="foodCol-name">Beef</a>
                    <a className="foodCol-qty">180/360</a>
                </div>
                <div className="foodCol-progress">
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="buffer" value={50} valueBuffer={50} />
                    </Box>
                </div>
            </div>
           


        </div>
    )
}

export default FoodCol;
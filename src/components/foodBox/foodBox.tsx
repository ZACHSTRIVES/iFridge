import React from "react";
import './food.css'
import { Box, LinearProgress } from "@material-ui/core";


export interface FoodBoxProps {
    food: any
    refetch: any
    expireDate: number
}


const FoodBox: React.FC<FoodBoxProps> = ({ food, refetch,expireDate }) => {
    const imge = require(`../../static/foods/${food.type}/${food.name}.png`).default


    return (
        <div className="foodBox">
            <div className="foodBox-title">{food.name}</div>

            {(() => {
                if (expireDate === 0) {
                    return (
                        <div className="foodBox-desc">
                            Expire today
                        </div>
                    )
                } else if (expireDate === -1) {
                    return (
                        <div className="foodBox-desc">
                            Expired yesterday
                        </div>
                    )
                } else if (expireDate < -1) {
                    return (
                        <div className="foodBox-desc">
                            Expired {Math.abs(expireDate)} days
                        </div>
                    )
                } else if (expireDate === 1) {
                    return (<div className="foodBox-desc">
                        Expire tomorrow
                    </div>)
                } else if (expireDate > 1) {
                    return (<div className="foodBox-desc">
                        Expire in {expireDate} days
                    </div>

                    )


                }
            })()}

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
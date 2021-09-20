import { Box, Chip, IconButton, LinearProgress } from "@material-ui/core";
import { Add, Remove, DeleteForever, AccessTime } from "@material-ui/icons";
import React from "react"
import image from '../../static/foods/Meat/BEEF.png'


export interface FoodColProps {
    food: any
    refetch: any
    expireDate: number
}


const FoodCol: React.FC<FoodColProps> = ({ food, refetch, expireDate }) => {
    const imge = require(`../../static/foods/${food.type}/${food.name}.png`).default
    let perc = (food.currentQTY / food.originQTY) * 100
    return (
        <div className="foodCol">
            <div className="foodCol-fp">
                <img className="foodCol-img" src={imge}></img>
                <div className="foodCol-stats">
                    <div className="foodBox-days">

                        <a className="foodCol-name">{food.name}</a>
                        <a className="foodCol-qty">{food.currentQTY}/{food.originQTY}</a>

                    </div>
                    <div className="foodCol-progress">
                        <Box sx={{ width: `100%` }}>
                            <LinearProgress variant="buffer" value={perc} valueBuffer={100} />
                        </Box>
                    </div>

                </div>
            </div>
            <div className="foodCol-timeChip">
                {(() => {
                    if (expireDate === 0) {
                        return (
                            <Chip
                                variant="outlined"
                                size="small"
                                icon={<AccessTime />}
                                label="Expiring today"
                                color="secondary"
                            />
                        )
                    } else if (expireDate <= -1) {
                        return (
                            <Chip
                                size="small"
                                icon={<AccessTime />}
                                label="Expired"
                                color="secondary"
                            />
                        )
                    } else if (expireDate === 1) {
                        return ( <Chip
                            variant="outlined"
                            size="small"
                            icon={<AccessTime />}
                            label="Expire in 1 day"
                            color="secondary"
                        />)
                    } else if (expireDate > 1) {
                        let str=`Expire in ${expireDate} days`
                        return (<Chip
                            variant="outlined"
                            size="small"
                            icon={<AccessTime />}
                            label={str}
                          
                        />

                        )


                    }
                })()}


            </div>




        </div>
    )
}

export default FoodCol;
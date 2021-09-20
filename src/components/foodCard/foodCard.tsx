import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, makeStyles } from "@material-ui/core";
import React from "react";
import './foodCard.css'

export interface FoodCardProps {
    food: any
    open: boolean
    handleClose: any
    refetch: any
}

const useStyles = makeStyles({
    root: {
      textAlign:"center"
    },
  });

const FoodCard: React.FC<FoodCardProps> = ({ food, open, handleClose, refetch }) => {

    const imge = require(`../../static/foods/${food.type}/${food.name}.png`).default
    const classes = useStyles();



    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth={true}
                maxWidth="xs"
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{food.name}</DialogTitle>
                <DialogContent className={classes.root}>
                    <img className="foodImage" src={imge}></img>
                    <DialogContentText id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>

        </div>)



}



export default FoodCard;
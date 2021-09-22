import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, makeStyles, Chip, IconButton } from "@material-ui/core";
import { AccessTime, Add, Remove } from "@material-ui/icons";
import React from "react";
import './foodCard.css'
import { EditFood } from "../../api/__generated__/EditFood";
import { DELETE_FOOD, EDIT_FOOD } from "../../api/mutations";
import { useMutation } from "@apollo/client";
import { DeleteFood } from "../../api/__generated__/DeleteFood";

export interface FoodCardProps {
    food: any
    open: boolean
    handleClose: any
    refetch: any
}

const useStyles = makeStyles({
    root: {
        textAlign: "center"
    },
});

function getDiffDate(targetDate: any) {
    let date1 = new Date(targetDate);
    let date2 = new Date();
    date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
    date2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
    const diff = date1.getTime() - date2.getTime();
    const diffDate = diff / (24 * 60 * 60 * 1000) - 1;
    return diffDate;
}

const FoodCard: React.FC<FoodCardProps> = ({ food, open, handleClose, refetch }) => {

    const imge = require(`../../static/foods/${food.type}/${food.name}.png`).default
    const classes = useStyles();
    let expireDate = Math.floor(getDiffDate(food.expireDate));
    const [qty,setQty] = React.useState(food.currentQTY)
    const [editFood] = useMutation<EditFood>(EDIT_FOOD)
    const [deleteFood] = useMutation<DeleteFood>(DELETE_FOOD)
    
    
    const handleAdd = ()=>{
        if(qty+1>food.originQTY){
            return
        }
        setQty(qty+1);
    }

    const handleSub = ()=>{
        if(qty-1<0){
            return
        }
        setQty(qty-1);
    }

   
    const handleSave = async ()=>{
        try {
            var res= await editFood({
                variables: {
                  foodID: food.id,
                  originQTY:String(food.originQTY),
                  currentQTY:String(qty),
                  notes:food.notes,
                  type:food.type,
                  expireDate:food.expireDate
                }
              })

              refetch()
              handleClose()
            
          } catch (e) {
            console.log(e)
          }
        
    }


    const handleDelete = async ()=>{
        try {
            var res= await deleteFood({
                variables: {
                  foodId: food.id,
                }
              })

              refetch()
              handleClose()
            
          } catch (e) {
            console.log(e)
          }
        
    }




    




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
                    <div className="chip">
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
                                return (<Chip
                                    variant="outlined"
                                    size="small"
                                    icon={<AccessTime />}
                                    label="Expire in 1 day"
                                    color="secondary"
                                />)
                            } else if (expireDate > 1) {
                                let str = `Expire in ${expireDate} days`
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

                    <DialogContentText id="alert-dialog-slide-description">
                        {food.notes}
                    </DialogContentText>

                    <div className="qtyBox">
                        <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleSub}>
                        <Remove />
                        </IconButton>

                        <a className="qtyBox-currentQTY">{qty} / </a> {food.originQTY}

                        <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleAdd}>
                            <Add />
                        </IconButton>


                    </div>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDelete} color="secondary">
                        Delete
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>

        </div>)



}




export default FoodCard;



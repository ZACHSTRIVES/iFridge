import { useMutation } from "@apollo/client";
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, makeStyles } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import React from "react";
import { ADD_FOOD } from "../../api/mutations";
import { AddFood } from "../../api/__generated__/AddFood";


export interface AddFoodDialogProps {
    refetch: any
    handleClose: any
    open: boolean
    fridgeID: String

}
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const AddFoodDialog: React.FC<AddFoodDialogProps> = ({ handleClose, refetch, open, fridgeID }) => {
    const classes = useStyles();
    const foods = {
        "Bread": ["BAGUETTE", "BREAD", "CROISSANT", "MUFFIN"],
        "Fruit": ["AVOCADO", "CHERRY", "COCONUT", "GRAPE", "LEMON", "ORANGE", "PEACH", "PEAR", "STRAWBERRY", "WATERMELON"],
        "Meat": ["BEEF", "EGGS", "PORKBELLY", "RIB", "SAUSAGE", "STAKE", "WHOLECHICKEN"],
        "Milk": ["CHEESE", "CREAM", "ICECREAM", "MILK", "YOGURT"],
        "Spices": ["CHINNAMON", "CUMIN", "CURRY POWDER", "DILL", "GARLIC", "GINGER", "HOLY BASIL", "HONEY", "ONION", "PAPRIKA", "PARSLEY"]
    }

    const [type, setType] = React.useState("")
    const [foodList, setFoodList] = React.useState<any>([])
    const [food, setFood] = React.useState("")
    const [qty, setQty] = React.useState("1")
    const [note, setNote] = React.useState("")
    const [addFood] = useMutation<AddFood>(ADD_FOOD);
    const [expireDate, setDate] = React.useState(new Date())

    const handleDateChange = (date: any) => {
        setDate(date);
    };


    const handleAdd = async () => {
        if (type === "") {
            return
        }
        if (food === "") {
            return
        }


        try {
            var { data } = await addFood({
                variables: {
                    fridgeId:fridgeID,
                    name: food,
                    type: type,
                    originQTY: qty,
                    currentQTY: qty,
                    notes: note,
                    expireDate:expireDate
                }

            })
            if (data != null) {
                refetch()
                handleClose();

            }

        } catch (e) {
            console.log("添加Fridge时报错：", e)
        }

    }


    const handleChangeType = (event: any) => {
        setType(event.target.value);
        if (event.target.value === "Bread") {
            setFoodList(foods.Bread);
        } else if (event.target.value === "Fruit") {
            setFoodList(foods.Fruit);
        } else if (event.target.value === "Meat") {
            setFoodList(foods.Meat);
        } else if (event.target.value === "Milk") {
            setFoodList(foods.Milk);
        } else if (event.target.value === "Spices") {
            setFoodList(foods.Spices);
        }
        setFood("");
    }

    const handleChangeFood = (event: any) => {
        setFood(event.target.value);
    }


    const handleChangeQTY = (event: any) => {
        setQty(event.target.value);
    };

    const handleChangeNote = (event: any) => {
        setNote(event.target.value);
    };



    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={true}
                maxWidth="sm">
                <DialogTitle id="form-dialog-title">Add Food</DialogTitle>
                <DialogContent>
                    <FormControl className={classes.formControl}>
                        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                            Type*
                        </InputLabel>
                        <Select required
                            labelId="demo-simple-select-placeholder-label-label"
                            id="demo-simple-select-placeholder-label"
                            value={type}
                            onChange={handleChangeType}
                            displayEmpty
                            className={classes.selectEmpty}
                        >
                            <MenuItem value="">
                                <em>Type</em>
                            </MenuItem>
                            <MenuItem value={"Bread"}>Bread</MenuItem>
                            <MenuItem value={"Fruit"}>Fruit</MenuItem>
                            <MenuItem value={"Meat"}>Meat</MenuItem>
                            <MenuItem value={"Milk"}>Milk</MenuItem>
                            <MenuItem value={"Spices"}>Spices</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                            Food*
                        </InputLabel>
                        <Select required
                            labelId="demo-simple-select-placeholder-label-label"
                            id="demo-simple-select-placeholder-label"
                            value={food}
                            onChange={handleChangeFood}
                            displayEmpty
                            className={classes.selectEmpty}
                        >
                            <MenuItem value="">
                                <em>Food</em>
                            </MenuItem>
                            {foodList.map((f: string | number | readonly string[] | undefined) => (

                                <MenuItem value={f}>
                                    {f}
                                </MenuItem>


                            ))}
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>

                        <TextField required id="standard-required" label="QTY" defaultValue={qty} value={qty} type="number" onChange={handleChangeQTY} />
                    </FormControl>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>

                        <FormControl className={classes.formControl}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Expire Date"
                                value={expireDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </FormControl>
                    </MuiPickersUtilsProvider>


                    <FormControl className={classes.formControl}>

                        <TextField
                            id="outlined-multiline-static"
                            label="Note"
                            multiline
                            rows={4}
                            defaultValue={note}
                            value={note}
                            variant="outlined"
                        />
                    </FormControl>


                </DialogContent>


                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAdd} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>

        </div>

    )





}


export default AddFoodDialog;
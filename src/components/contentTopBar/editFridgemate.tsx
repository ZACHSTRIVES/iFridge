import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Avatar, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem, ListItemAvatar, ListItemText, TextField } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { blue } from '@material-ui/core/colors';
import { AddUserFridge } from '../../api/__generated__/AddUserFridge';
import { ADD_USERFRIDGE } from '../../api/mutations';
import { useMutation } from "@apollo/client";
import Alert from '@material-ui/lab/Alert';
import DeleteFridgemate from "./deleteFridgemate";
import { idText } from "typescript";

export interface EditFridgemateProps {
    users?: any
    fridgeID?: String
    ID?: String
    updateFridegmates: any
}


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 6,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 40,
    },
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
    modal: {
        width: 200
    }
});

const EditFridgemate: React.FC<EditFridgemateProps> = ({ users, fridgeID, ID, updateFridegmates }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [addOpen, setAddOpen] = React.useState(false);
    const [userID, setUserID] = React.useState("");
    const [addUserFridge] = useMutation<AddUserFridge>(ADD_USERFRIDGE);
    const [showAddError, setShowAddError] = React.useState(false);
    const [showDelete, setShowDelete] = React.useState(false);
    const [deleteName, setDeleteName] = React.useState("");
    const [deleteID, setDeleteID] = React.useState("");

    const handleClose = () => {
        setOpen(false);

    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleAddOpen = () => {
        setOpen(false);
        setAddOpen(true);

    };
    const handleAddClose = () => {
        setAddOpen(false);
        setShowAddError(false);
    };
    const handleShowDelete = (dName?: any, dId?: any) => {
        if(dId===ID){
            return
        }
        if (dName) {
            setDeleteName(dName);
        }
        if (dId) {
            setDeleteID(dId);
        }

        setShowDelete(true);
    };
    const handleCloseDelete = () => {
        setDeleteID("");
        setDeleteName("");
        setShowDelete(false);
    };



    const handleSubmit = async () => {
        if (userID === "") {
            return
        }
        try {
            const { data } = await addUserFridge({
                variables: {
                    userId: userID,
                    fridgeId: fridgeID
                }
            })
            addFridgemates(data?.addUserFridge);
            handleAddClose();
        } catch (e) {
            setShowAddError(true);
        }
    }

    const addFridgemates = (fm: any) => {
        var temp = [...users]
        temp.push(fm)
        updateFridegmates(temp)

    }


    return (
        <div>
            <Button className={classes.root} onClick={handleClickOpen}>Edit Fridgemate</Button>
            <Dialog fullWidth={true}
                maxWidth={"sm"} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title">Edit Fridgemate</DialogTitle>
                <List>
                    {users.map((u: any) => (

                        <ListItem button onClick={() => { handleShowDelete(u.user.name, u.user.id) }}>
                            <ListItemAvatar>
                                <Avatar src={u.user.imageURI}>
                                </Avatar>
                            </ListItemAvatar>
                            {u.user.id === ID ? <ListItemText primary={u.user.name} /> : <ListItemText primary={u.user.name} secondary="Remove" />}

                        </ListItem>


                    ))}

                    <ListItem autoFocus button onClick={handleAddOpen}>
                        <ListItemAvatar>
                            <Avatar>
                                <AddIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Add Fridgemate" />
                    </ListItem>
                </List>
            </Dialog>
            <Dialog fullWidth={true}
                maxWidth={"sm"} open={addOpen} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Fridgemate</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add your new fridgemate here!
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Fridgemate ID"
                        value={userID}
                        onChange={e => setUserID(e.target.value)}
                        fullWidth
                    />

                    {showAddError ? <Alert severity="error">The user does not exist! Or already added!</Alert> : <a></a>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleAddClose} color="primary">
                        Cancel
                    </Button>
                    <Button color="primary" onClick={handleSubmit}>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>

            <DeleteFridgemate
                fridgeID={fridgeID}
                userID={deleteID}
                name={deleteName}
                show={showDelete}
                handleClose={handleCloseDelete}
                updateFridgemates={updateFridegmates}>


            </DeleteFridgemate>

        </div>



    )
}

export default EditFridgemate;
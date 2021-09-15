import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import React from "react";
import { RemoveFridgemate } from "../../api/__generated__/RemoveFridgemate";
import { REMOVE_FRIDGEMATE } from "../../api/mutations";
import { useMutation } from "@apollo/client";

export interface DeleteFridgeMateProps {
    fridgeID?: any
    userID?: String
    name?: String
    show: boolean
    handleClose: any
    updateFridgemates:any

}




const DeleteFridgemate: React.FC<DeleteFridgeMateProps> = ({ fridgeID, userID, name, show, handleClose, updateFridgemates }) => {
    const [removeFridgemate] = useMutation<RemoveFridgemate>(REMOVE_FRIDGEMATE);

    const handleDelete = async () => {
        if (userID === "") {
            return
        }
        try {
            const {data} = await removeFridgemate({
                variables: {
                    userId: userID,
                    fridgeId: fridgeID
                }
            })

            updateFridgemates(data?.removeFridgemate);


            handleClose();
        } catch (e) {
            // setShowAddError(true);
        }
    }


    return (
        <Dialog
            open={show}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{`Are you sure you want to remove ${name}?`}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    When you click "Remove" {name} will be removed from this fridge.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleDelete} color="primary" autoFocus>
                    Remove
                </Button>
            </DialogActions>
        </Dialog>

    )



}


export default DeleteFridgemate;
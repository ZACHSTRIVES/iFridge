import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import React from "react";
import { DeleteUserFridge } from "../../api/__generated__/DeleteUserFridge";
import { DELETE_USERFRIDGE } from "../../api/mutations";


export interface DeleteFridgeMateProps {
    fridgeID?: String
    userID?: String
    name?: String
    show: boolean
    handleClose: any

}




const DeleteFridgemate: React.FC<DeleteFridgeMateProps> = ({ fridgeID, userID, name, show, handleClose }) => {
    // // const [deleteUserFridge] = useMutation<DeleteUserFridge>(ADD_USERFRIDGE);

    // const handleDelete = async () => {
    //     if (userID === "") {
    //         return
    //     }
    //     try {
    //         await addUserFridge({
    //             variables: {
    //                 userId: userID,
    //                 fridgeId: fridgeID
    //             }
    //         })
    //         handleAddClose();
    //     } catch (e) {
    //         setShowAddError(true);
    //     }
    // }


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
                <Button onClick={handleClose} color="primary" autoFocus>
                    Remove
                </Button>
            </DialogActions>
        </Dialog>

    )



}


export default DeleteFridgemate;
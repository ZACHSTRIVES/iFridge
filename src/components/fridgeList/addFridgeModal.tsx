import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from "@material-ui/core";
import { AddFridge } from '../../api/__generated__/AddFridge';
import { ADD_FRIDGE } from '../../api/mutations';
import { AddUserFridge } from '../../api/__generated__/AddUserFridge';
import { ADD_USERFRIDGE } from '../../api/mutations';
import { useMutation } from '@apollo/client';
import { AddFridge_addFridge } from '../../api/__generated__/AddFridge';

export interface addFridgeModalPropos {
    isShow:boolean
    controlModal:any
    userID?:any

}

const AddFridgeModal: React.FC<addFridgeModalPropos> = ({ isShow,controlModal,userID }) => {
    const [fridgeName, setFridgeName] = useState<string>("");
    const [addFridge]=useMutation<AddFridge>(ADD_FRIDGE);
    const [addUserFridge]=useMutation<AddUserFridge>(ADD_USERFRIDGE);

    const handleSubmit = async() =>{
        if(fridgeName===""){
            return
        }

        try{
            var {data}= await addFridge({
                variables:{
                    name:fridgeName,
                    ownerId:userID
                }

            })
            if(data!=null){
                await addUserFridge({
                    variables:{
                        userId:userID,
                        fridgeId:data.addFridge.id
    
                    }
                })

            }  
            controlModal();
        }catch(e){
            console.log("添加Fridge时报错：",e)
        }
    }

    return(
        <Dialog open={isShow}  aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Fridge</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Add your new fridge here!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Fridge Name"
            value={fridgeName}
            onChange={e=>setFridgeName(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={controlModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    )
}


export default AddFridgeModal;
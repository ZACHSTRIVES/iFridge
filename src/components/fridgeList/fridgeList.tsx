import React from 'react'
import FridgeTab from './fridgeTab';
import './fridgeList.css';
import { Self_self } from '../../api/__generated__/Self';
import AddFridgeModal from './addFridgeModal';

export interface FridgeListProps {
    user?: Self_self;
    changeFridge:any
}



const FridgeList: React.FC<FridgeListProps> = ({ user,changeFridge }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className="fridgeList">
                {
                    user?.userFridges.map((uf) => (
                    
                        <FridgeTab fridge={uf.fridge} changeFridge={changeFridge}></FridgeTab>
                     
                    ))
                }
                <div className="fridgeTab" onClick={handleClickOpen}>+</div>

            </div>
            <AddFridgeModal isShow={open} controlModal={handleClose} userID={user?.id}></AddFridgeModal>
        </div>
        

    )
}

export default FridgeList;
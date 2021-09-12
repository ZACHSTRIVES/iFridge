import React from 'react'
import FridgeTab from './fridgeTab';
import './fridgeList.css';
import { Self, Self_self, Self_self_userFridges } from '../../api/__generated__/Self';
import AddFridgeModal from './addFridgeModal';

export interface FridgeListProps {
    user?: Self_self;
    changeFridge: any;
    userFridges?: Self_self_userFridges[];
    currentFridgeId?: String;
}



const FridgeList: React.FC<FridgeListProps> = ({ user, changeFridge, userFridges, currentFridgeId }) => {
    const [open, setOpen] = React.useState(false);
    const [userFridgeList, setUserFridgeList] = React.useState(userFridges ? userFridges : [])


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addNewFridgeToLocal = (uf: Self_self_userFridges) => {
        const temp = [...userFridgeList]
        temp.push(uf)
        setUserFridgeList(temp)
        changeFridge(uf.fridge)
    }

    return (
        <div>
            {userFridgeList ? <div className="fridgeList">
                {
                    userFridgeList.map((uf) => (

                        <FridgeTab fridge={uf.fridge} changeFridge={changeFridge}></FridgeTab>

                    ))
                }
                <div className="fridgeTab" onClick={handleClickOpen}>+</div>

            </div> : <div></div>}

            <AddFridgeModal
                isShow={open}
                controlModal={handleClose}
                userID={user?.id}
                addNewFridgeToLocal={addNewFridgeToLocal}>

            </AddFridgeModal>
        </div>


    )
}

export default FridgeList;
import React from 'react'
import FridgeTab from './fridgeTab';
import './fridgeList.css';
import { Self_self } from '../../api/__generated__/Self';
import fridgeTab from './fridgeTab';

export interface FridgeListProps {
    user?: Self_self;
}



const fridgeList: React.FC<FridgeListProps> = ({ user }) => {
    return(
        <div className="fridgeList">
            {
                user?.userFridges.map((uf)=>(
                    <FridgeTab fridge={uf.fridge}></FridgeTab>
                ))
            }
            
        </div>

    )
}

export default fridgeList;
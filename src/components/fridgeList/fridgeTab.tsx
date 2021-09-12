import React from 'react'
import { fridgeFields } from '../../api/__generated__/fridgeFields';


export interface FridgeTapProps {
    fridge?: fridgeFields;
    changeFridge:any
}

const fridgeTab: React.FC<FridgeTapProps> = ({ fridge,changeFridge }) => {
    return(
        <div className="fridgeTab" onClick={()=>{changeFridge(fridge)}}>
             {fridge?.name}
        </div>

    )
}

export default fridgeTab;
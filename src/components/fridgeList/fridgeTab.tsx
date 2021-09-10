import React from 'react'
import { fridgeFields } from '../../api/__generated__/fridgeFields';


export interface FridgeTapProps {
    fridge?: fridgeFields;
}

const fridgeTab: React.FC<FridgeTapProps> = ({ fridge }) => {
    return(
        <div className="fridgeTab">
             {fridge?.name}
        </div>

    )
}

export default fridgeTab;
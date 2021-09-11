import React from "react"
import { Self_self_userFridges_fridge } from '../../api/__generated__/Self'
import ContentTopBar from '../contentTopBar/contentTopBar'


export interface ContentProps {
    fridge?: Self_self_userFridges_fridge
}

const Content: React.FC<ContentProps> = ({ fridge }) => {

    return (
        <div className="content">
            <ContentTopBar fridgeName={fridge?.name} users={fridge?.userFridges}></ContentTopBar>
            
        </div>
    )

}
export default Content;
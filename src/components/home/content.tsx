import React from "react"
import { Self_self_userFridges_fridge } from '../../api/__generated__/Self'
import ContentTopBar from '../contentTopBar/contentTopBar'
import { Fridge } from "../../api/__generated__/Fridge"
import { FRIDGE } from "../../api/queries"
import { useQuery } from "@apollo/client"
import SlideFoodList from "../foodBox/slideFoodList"
import "./home.css"

export interface ContentProps {
    fridge?: any
    fridgeId:any
}

const Content: React.FC<ContentProps> = ({ fridge,fridgeId }) => {

    
    const {loading,data,refetch} = useQuery<Fridge>(FRIDGE,{variables:{fridgeId}})
 
    
    return (
        <div className="content">
            {loading?<p>Loading</p>:
             <ContentTopBar fridgeName={data?.fridge.name} users={data?.fridge.userFridges} fridgeID={fridge?.id} refetch={refetch}></ContentTopBar>
             }
             <div className="subTitle">Eat Them Today！</div>
            <SlideFoodList></SlideFoodList>
        </div>
    )

}
export default Content;
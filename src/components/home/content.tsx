import React from "react"
import { Self_self_userFridges_fridge } from '../../api/__generated__/Self'
import ContentTopBar from '../contentTopBar/contentTopBar'
import { Fridge } from "../../api/__generated__/Fridge"
import { FRIDGE } from "../../api/queries"
import { useQuery } from "@apollo/client"
import SlideFoodList from "../foodBox/slideFoodList"
import FoodTable from "../foodTable/foodTable"
import RecipeBox from "../recipeBox/recipeBox"
import "./home.css"

export interface ContentProps {
    fridge?: any
    fridgeId: any
    userId?:String
}

const Content: React.FC<ContentProps> = ({ fridge, fridgeId,userId }) => {


    const { loading, data, refetch } = useQuery<Fridge>(FRIDGE, { variables: { fridgeId } })
    console.log(data)

    return (
        <div className="content">
            {loading ? <p>Loading</p> :
                <div>
                    <ContentTopBar fridgeName={data?.fridge.name} users={data?.fridge.userFridges} fridgeID={fridge?.id} refetch={refetch} ownerID={data?.fridge.ownerId} ID={userId}></ContentTopBar>


                </div>
            }
            <div className="subTitle">Eat Them Today！</div>
            {loading ? <p>Loading</p> :
                <SlideFoodList foods={data?.fridge.foods} refetch={refetch}></SlideFoodList>
            }
            <div className="subContiner">
                {loading ? <p>Loading</p> :
                    <FoodTable foods={data?.fridge.foods} refetch={refetch} fridgeID={fridge.id}></FoodTable>

                }
                <RecipeBox></RecipeBox>

            </div>
        </div>
    )

}
export default Content;
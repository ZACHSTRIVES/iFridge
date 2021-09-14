import React from "react"
import './contentTopBar.css'
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import EditFridgemate from "./editFridgemate";
import { FRIDGEMATES } from "../../api/queries";
import { useLazyQuery, useQuery } from "@apollo/client";
import { FridgeMatesVariables } from "../../api/__generated__/fridgeMates";

export interface topBarProps {
    fridgeName?: String
    users?: any
    fridgeID?: String
    ID?:String
}


const ContentTopBar: React.FC<topBarProps> = ({ fridgeName, users, fridgeID,ID }) => {
    
    const [fridgemates,setFridgemates] = React.useState(users)
    const numOfFridgemate = fridgemates.length;

    const updateFridgemates = (uf:any)=>{
        setFridgemates(uf);
    }

  



    return (
        <div className="contentTopBar">
            <div className="fridgeTitle">{fridgeName}</div>
            <div className="colleaguesBox">
                <AvatarGroup max={3}>
                    {fridgemates.map((u: any) => (<Avatar alt={u.user.name} src={u.user.imageURI} />))}


                </AvatarGroup>
                {numOfFridgemate === 1 ? <div className="textBox">
                    <p>Only you use</p>
                    <p>this fridge</p>
                </div> : <div className="textBox">
                    <p>{numOfFridgemate} fridgemates</p>
                    <p>share this</p>
                </div>}

                <EditFridgemate users={fridgemates} fridgeID={fridgeID} ID={ID} updateFridegmates={updateFridgemates}></EditFridgemate>

            </div>



        </div>
    )

}
export default ContentTopBar;
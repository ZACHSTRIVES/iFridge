import React from "react"
import './contentTopBar.css'
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import EditFridgemate from "./editFridgemate";

export interface topBarProps {
    fridgeName?: String
    users?: any
    fridgeID?: any
    ID?:String
    refetch:any
}


const ContentTopBar: React.FC<topBarProps> = ({ fridgeName, users, fridgeID,ID,refetch }) => {
    
    const numOfFridgemate = users.length;

    const updateFridgemates = (uf:any)=>{
        refetch()
    }


    return (
        <div className="contentTopBar">
            <div className="fridgeTitle">{fridgeName}</div>
            <div className="colleaguesBox">
                <AvatarGroup max={3}>
                    {users.map((u: any) => (<Avatar alt={u.user.name} src={u.user.imageURI} />))}


                </AvatarGroup>
                {numOfFridgemate === 1 ? <div className="textBox">
                    <p>Only you use</p>
                    <p>this fridge</p>
                </div> : <div className="textBox">
                    <p>{numOfFridgemate} fridgemates</p>
                    <p>share this</p>
                </div>}

                <EditFridgemate users={users} fridgeID={fridgeID} ID={ID} updateFridegmates={updateFridgemates}></EditFridgemate>

            </div>



        </div>
    )

}
export default ContentTopBar;
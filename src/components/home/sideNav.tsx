import React  from "react"
import {Self_self} from "../../api/__generated__/Self"
import ProfileAvater from "../profile/profile"
import FridgeList from '../fridgeList/fridgeList';
import { Self_self_userFridges } from "../../api/__generated__/Self";

export interface SideNavProps {
    user?: Self_self;
    changeFridge:any;
    userFridges?:Self_self_userFridges[]
}

const SideNav: React.FC<SideNavProps> = ({ user,changeFridge,userFridges }) => {
    return (
        <div className="nav glass-blur">
           <ProfileAvater url={user?.imageURI} nickName={user?.gitHub} name={user?.name}></ProfileAvater>
           <FridgeList user={user} changeFridge={changeFridge} userFridges={userFridges}></FridgeList>
           
        </div>
    )
}


export default SideNav;
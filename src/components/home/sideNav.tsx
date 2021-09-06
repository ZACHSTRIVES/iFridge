import { Avatar } from "@material-ui/core"
import React  from "react"
import {Self_self} from "../../api/__generated__/Self"
import ProfileAvater from "../profile/profile"
import FridgeList from '../fridgeList/fridgeList';

export interface SideNavProps {
    user?: Self_self;
}

const SideNav: React.FC<SideNavProps> = ({ user }) => {
    return (
        <div className="nav glass-blur">
           <ProfileAvater url={user?.imageURI} nickName={user?.gitHub} name={user?.name}></ProfileAvater>
           <FridgeList></FridgeList>
           
        </div>
    )
}


export default SideNav;
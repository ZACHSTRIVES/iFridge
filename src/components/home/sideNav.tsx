import React  from "react"
import {Self_self} from "../../api/__generated__/Self"
import ProfileAvater from "../profile/profile"
import FridgeList from '../fridgeList/fridgeList';
import { useRadioGroup } from "@material-ui/core";

export interface SideNavProps {
    user?: Self_self;
}

const SideNav: React.FC<SideNavProps> = ({ user }) => {
    return (
        <div className="nav glass-blur">
           <ProfileAvater url={user?.imageURI} nickName={user?.gitHub} name={user?.name}></ProfileAvater>
           <FridgeList user={user}></FridgeList>
           
        </div>
    )
}


export default SideNav;
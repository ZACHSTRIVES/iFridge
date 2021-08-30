import { Avatar } from "@material-ui/core"
import React  from "react"
import {Self_self} from "../../api/__generated__/Self"
import ProfileAvater from "../avatar/avatar"

export interface SideNavProps {
    user?: Self_self;
}

const SideNav: React.FC<SideNavProps> = ({ user }) => {
    return (
        <div className="nav">
           <ProfileAvater url={user?.imageURI}></ProfileAvater>
        </div>
    )
}


export default SideNav;
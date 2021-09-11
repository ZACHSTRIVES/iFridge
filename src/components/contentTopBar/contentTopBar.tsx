import React from "react"
import './contentTopBar.css'
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import EdoyColleague from './editColleague'
import EditColleague from "./editColleague";

export interface topBarProps {
    fridgeName?: String
    users?: any
}


const ContentTopBar: React.FC<topBarProps> = ({ fridgeName, users }) => {

    return (
        <div className="contentTopBar">
            <div className="fridgeTitle">{fridgeName}</div>
            <div className="colleaguesBox">
                <AvatarGroup>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </AvatarGroup>
                <div className="textBox">
                    <p>+2 colleagues</p>
                    <p>share this</p>
                </div>
                <EditColleague></EditColleague>
                
            </div>



        </div>
    )

}
export default ContentTopBar;
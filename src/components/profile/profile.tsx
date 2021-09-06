import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { StringLiteralLike } from 'typescript';
import './profile.css'

export interface AvatarProps {
  url?: string;
  nickName?: string;
  name?: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  }

}))

const ProfileAvatar: React.FC<AvatarProps> = ({ url, nickName, name }) => {
  const classes = useStyles();

  return (
    <div className="profile">
      <Avatar src={url} className={classes.large}></Avatar>
      <div className="nameFiled">
        <div className="nickName">{nickName}</div>
        <div className="name">{name}</div>

      </div>


    </div>
  )
}


export default ProfileAvatar;
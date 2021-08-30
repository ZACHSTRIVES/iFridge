import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

export interface AvatarProps {
    url?: string;
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

const ProfileAvatar: React.FC<AvatarProps> = ({ url }) => {
    const classes = useStyles();

    return(
        <div>
            <Avatar src={url} className={classes.large}></Avatar>
        </div>
    )
}


export default ProfileAvatar;
import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import style from "./ListViewCrew.module.css"


interface ListViewCrewProps {
 actor: {
  person: {
    id: number,
    name: string,
    image: {medium?: string, original: string}
  }
 };
};

const ListViewCrew: React.FC<ListViewCrewProps> = props => {
  return (
      <ListItem key={props.actor.person.id}>
        <ListItemAvatar>
          <Avatar>
            <img className={style.actorPhoto} src={props.actor.person.image.medium} alt="actor" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.actor.person.name} />
      </ListItem>   
  )
} 

export default ListViewCrew;
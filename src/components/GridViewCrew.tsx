import React from "react";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import CardStyle from "./UI/CardStyle";


interface GridViewCrewProps {
 actor: {
  person: {
    id: number,
    name: string,
    image: {medium?: string, original: string}
  }
 };
};

const GridViewCrew: React.FC<GridViewCrewProps> = props => {


  return (
    <CardStyle key={props.actor.person.id}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.actor.person.image.medium}
          alt="show photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.actor.person.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardStyle>
  )
} 

export default GridViewCrew;
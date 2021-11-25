import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import style from "./GridViewCrew.module.css"


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
    <Card className={style.card} key={props.actor.person.id} sx={{ maxWidth: 345 }}>
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
    </Card>
  )
} 

export default GridViewCrew;
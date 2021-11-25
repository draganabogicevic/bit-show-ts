import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import style from "./ShowCard.module.css"

interface ShowCardProps {
  show: {
  id?: any;
  name: string;
  image: {medium: string, original: string};
  rating: {average: number}
  }
}

const ShowCard: React.FC<ShowCardProps> = props => {
  return (
    <Card key={props.show.id} sx={{ maxWidth: 345 }} className={style.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.show.image.original}
          alt="show photo"
          className={style.photo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.show.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.show.rating.average}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
} 

export default ShowCard;
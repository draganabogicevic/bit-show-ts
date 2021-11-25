import React from "react";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import CardStyle from "./UI/CardStyle";
import style from "styled-components";

const StyledImg = style.img`
height: 450px;
width: auto;
`

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
    <CardStyle key={props.show.id}>
      <CardActionArea>
        <StyledImg
          src={props.show.image.original}
          alt="show photo"
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
    </CardStyle>
  )
} 

export default ShowCard;
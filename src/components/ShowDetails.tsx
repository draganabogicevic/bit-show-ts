import React from "react";
import Grid from '@mui/material/Grid';
import ReactHtmlParser from 'react-html-parser'; 
import style from "./ShowDetails.module.css"

interface ShowDetailsProps {
  show: {
  id?: any;
  name: string;
  image: {medium: string, original: string};
  rating: {average: number}
  genres: string[];
  summary: string
  }
}

const ShowDetails: React.FC<ShowDetailsProps> = (props) => {
  return (
    <Grid className={style.container} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item lg={6}>
        <img src={props.show.image.original} className={style.photo} alt="show"/>
      </Grid>
      <Grid item lg={6}>
        <h1>{props.show.name}</h1>
        {props.show.genres.map((genre) => <div className={style.genres}>{genre}</div>)}
          <div className={style.summary}>{ReactHtmlParser (props.show.summary)}</div>
      </Grid>
    </Grid>
  )
}

export default ShowDetails;
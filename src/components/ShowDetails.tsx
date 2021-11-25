import React from "react";
import Grid from '@mui/material/Grid';
import ReactHtmlParser from 'react-html-parser'; 
import Summary from "./UI/Summary"
import ContainerStyled from "./UI/ContainerStyled";
import style from "styled-components"

const ImgStyled = style.img`
width: 80%;
`
const StyledDivGenres = style.div`
display: inline-block;
  width: 130px;
  height: 30px;
  text-align: center;
  background-color: darkgray;
  border-radius: 20px;
`

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
  <ContainerStyled>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item lg={6}>
        <ImgStyled src={props.show.image.original} alt="show"/>
      </Grid>
      <Grid item lg={6}>
        <h1>{props.show.name}</h1>
        {props.show.genres.map((genre) => <StyledDivGenres>{genre}</StyledDivGenres>)}
          <Summary>{ReactHtmlParser (props.show.summary)}</Summary>
      </Grid>
    </Grid>
  </ContainerStyled>    
  )
}

export default ShowDetails;
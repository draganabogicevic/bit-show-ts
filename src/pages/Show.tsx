import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import Service from "../service/service"
import Grid from '@mui/material/Grid';
import { ShowDataType, ShowCrewType } from '../types/types';
import style from "./Show.module.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';

const defaultShow: ShowDataType = {
  name: "",
  image: {
    medium: "",
    original: ""
  },
  rating: {
    average: 0
  },
  genres: ["", "", ""],
  summary: ""
};
const defaultShowCrew: ShowCrewType[] = [
  // {
  //   id?: any,
  //   name: string,
  //   image: {medium: string, original: string},
  // }
];

const Show: React.FC = () => {
  let location = useLocation();
  let path = location.pathname;
  let pathForCrew = path+"/cast"
 

  console.log(path)

  const [show, setShow]: [ShowDataType, (show: ShowDataType) => void] = React.useState(
    defaultShow
  )

  const [crew, setCrew]: [ShowCrewType[], (crew: ShowCrewType[]) => void] = React.useState(
    defaultShowCrew
  )

  const [loading, setLoading]: [
    boolean,
    (loading: boolean) => void
  ] = React.useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] = React.useState(
    ''
  );
  

   React.useEffect(() => {
    Service.findSelected(path)
     .then((response) => {
       setShow(response);
       setLoading(false);
     })
     .catch((ex) => {
         setError(ex);
         setLoading(false);
       });
   },[path]);

   React.useEffect(() => {
    Service.findSelectedCrew(pathForCrew)
     .then((response) => {
       setCrew(response);
       setLoading(false);
     })
     .catch((ex) => {
         setError(ex);
         setLoading(false);
       });
   },[pathForCrew]);

  console.log(crew);


  return (
    <Fragment>
       <Grid className={style.container} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item lg={6}>
            <img src={show.image.original} className={style.photo} alt="show"/>
          </Grid>
          <Grid item lg={6}>
            <h1>{show.name}</h1>
            <div className={style.genres}>{show.genres[0]}</div>
            <div className={style.genres}>{show.genres[1]}</div>
            <div className={style.genres}>{show.genres[2]}</div>
            <div className={style.summary}>{show.summary}</div>
          </Grid>
      </Grid>
      <Grid className={style.container} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {/* {crew.map((actor) => (
          <Grid item lg={2} key={actor.person.id}>
            <Card key={show.id} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={actor.person.image.medium}
                  alt="show photo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {actor.person.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Grid>
          ))} */}
      </Grid>

    </Fragment>
  )
}

export default Show;
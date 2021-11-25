import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import GridViewCrew from "../components/GridViewCrew"
import ShowDetails from "../components/ShowDetails"
import Service from "../service/service"
import { ShowDataType, ShowCrewType } from '../types/types';
import ListViewCrew from "../components/ListViewCrew"
import style from "./ShowDetails.module.css"
import Grid from '@mui/material/Grid';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import ViewListIcon from '@mui/icons-material/ViewList';
import List from '@mui/material/List';
import Box from '@mui/material/Box';

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
const defaultShowCrew: ShowCrewType[] = []; 

const Show: React.FC = () => {
  let location = useLocation();
  let path = location.pathname;
  let pathForCrew = path+"/cast";
 

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
  
  const [gridView, setGridView] = React.useState(true);
  

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

   const toggleView = () => {
     setGridView(!gridView);
   }
   
  return (
    <Fragment>
      <ShowDetails show={show}/>
      <Grid className={style.container} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item lg={11}>
          <h1>Actors</h1>
        </Grid>
        <Grid item lg={1}>
          { gridView? (<ViewListIcon  sx={{ fontSize: 40 }} onClick={toggleView}/>) :
          (<ViewComfyIcon  sx={{ fontSize: 40 }} onClick={toggleView}/>) }
        </Grid>   
        {crew.map((actor) => gridView? (<Grid item lg={2} key={actor.person.id}><GridViewCrew actor={actor}/></Grid>) 
        : ( <Box sx={{ justifyContent: 'center' }}><List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}><ListViewCrew actor={actor} /></List></Box>)
        )}
      </Grid>
    </Fragment>
  )
}

export default Show;




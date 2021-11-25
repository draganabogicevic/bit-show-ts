import React from "react";
import Loader from "../components/Loader"
import { Link } from "react-router-dom"
import ShowCard from "../components/ShowCard"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Service from "../service/service"
import { ShowDataTypes } from "../types/types";


const defaultShow: ShowDataTypes[] = [];

const Home: React.FC = () => {

  const [shows, setShows]: [ShowDataTypes[], (shows: ShowDataTypes[]) => void] = React.useState(
    defaultShow
  )

  const [loading, setLoading]: [
    boolean,
    (loading: boolean) => void
  ] = React.useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] = React.useState(
    ''
  );
  React.useEffect(() => {
   Service.findAll()
    .then((response) => {
      setShows(response);
      setLoading(false);
    })
    .catch((ex) => {
        setError(ex);
        setLoading(false);
      });
  }, []);

  console.log(shows)
  if (loading) {
    return <Loader />
  }

  return (
    <Container>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {shows.slice(0, 50).map((show) => (
          <Grid item lg={4} key={show.id}>
          <Link to={`/${show.id}`}>
            <ShowCard show={show} />
          </Link>  
        </Grid>
          ))}
        {error && <p className="error">{error}</p>}
        
      </Grid>
      </Box>
    </Container>
  );
};

export default Home;


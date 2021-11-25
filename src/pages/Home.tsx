import React from "react";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import ShowCard from "../components/ShowCard";
import Search from "../components/Search"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Service from "../service/service"
import { ShowDataTypes } from "../types/types";
import style from "./Home.module.css"


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

  
  if (loading) {
    return <Loader />
  }

  return (
    <Container>
      <Box sx={{ width: "80%", margin: "auto" }}>
        <Search />
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {shows.slice(0, 50).map((show) => (
            <Grid item md={4} key={show.id}>
              <Link to={`/${show.id}`} className={style.link}>
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


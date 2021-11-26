import React from "react";
import Loader from "../components/Loader";
import ShowCard from "../components/ShowCard";
import Search from "../components/Search"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Service from "../service/service"
import { ShowDataTypes } from "../types/types";
import LinkStyle from "../components/UI/LinkStyle";


const defaultShow: ShowDataTypes[] = [];

const Home: React.FC = () => {

  const [shows, setShows]: [ShowDataTypes[], (shows: ShowDataTypes[]) => void] = React.useState(
    defaultShow
  )
    
  const [queryText, setQueryText]: [string, (queryText: string) => void] = React.useState("")

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

  const handleSearch = (filteredText: string) => {
    setQueryText(filteredText);
  }


  let searchResult: ShowDataTypes[]= [];

  if(queryText === "") {
    searchResult = shows;
  } else if(typeof parseFloat(queryText) === "number") {
    searchResult = shows.filter(item => item.rating.average === parseFloat(queryText))
  } else {
    searchResult = shows.filter(item => item.name.toLowerCase().includes(queryText.toLowerCase()));
  }

  if (loading) {
    return <Loader />
  }

  return (
    <Container>
      <Box style={{ width: "80%", margin: "auto", marginBottom: "50px" }}>
        <Search onSearch={handleSearch} queryText={queryText}/>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {searchResult.slice(0, 50).map((show) => (
            <Grid item md={4} key={show.id}>
              <LinkStyle to={`/${show.id}`}>
                <ShowCard show={show} />
              </LinkStyle>  
            </Grid>
          ))}
        {error && <p className="error">{error}</p>}
      </Grid>
      </Box>
    </Container>
  );
};

export default Home;


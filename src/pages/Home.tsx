import React from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, CardActionArea, CardActions } from '@mui/material';

interface ShowsType {
  id: number;
  name: string;
  image: {medium: string, original: string}
}

const defaultShow: ShowsType[] = [];

const Home: React.FC = () => {
  const [shows, setShows]: [ShowsType[], (shows: ShowsType[]) => void] = React.useState(
    defaultShow
  );

  const [loading, setLoading]: [
    boolean,
    (loading: boolean) => void
  ] = React.useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] = React.useState(
    ''
  );


  React.useEffect(() => {
    axios
      .get<ShowsType[]>("http://api.tvmaze.com/shows", {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      })
      .then((response) => {
        setShows(response.data);
        setLoading(false);
      })
      .catch((ex) => {
        let error = axios.isCancel(ex)
          ? 'Request Cancelled'
          : ex.code === 'ECONNABORTED'
          ? 'A timeout has occurred'
          : ex.response.status === 404
          ? 'Resource Not Found'
          : 'An unexpected error has occurred';

        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        {shows.slice(0, 50).map((show) => (
          <Card key={show.id} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={show.image.medium}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {show.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          ))}
        {error && <p className="error">{error}</p>}
        </Grid>
      </Grid>
      </Box>
    </Container>
  );
};

export default Home;
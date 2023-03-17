

import { useState, useEffect } from 'react'
import Head from 'next/head';
import Grid2 from '@mui/material/Unstable_Grid2';

import { useRouter } from 'next/router';

import {
  Card,
  Container,
  Paper,
  Typography,
} from '@mui/material';

import {
  Header,
  Footer,
} from '../../../components';


export default function Home() {

  const router = useRouter();
  const { gameID } = router.query;

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (gameID) {
      fetch(`/api/games/slug/${gameID}`)
        .then((res) => res.json())
        .then((data) => {
          console.log('data', data);
          setData(data[0]);
          setLoading(false);
        })
    }
  }, [router])

  if (isLoading) {
    return (
      <p>Loading</p>
    );
  }

  if (!data) {
    return (
      <p>No data returned</p>
    );
  }

  return (
    <div>
      <Head>
        <title>SFGDB - Harry Potter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container maxWidth="md">
        <main>
          <Typography variant="h4" gutterBottom onClick={ () => console.log('data', data) }>
            Sickfrags GameDB
          </Typography>
          <Grid2 container spacing={ 2 }>
            <Grid2 xs={ 12 }>
              <div style={{ float: 'left' }}>
                <Typography variant="h5" gutterBottom>
                  { data?.name }
                </Typography>
              </div>
              <div style={{ float: 'right' }}>
                IGDB Rating - { data?.rating }
              </div>
            </Grid2>
            <Grid2 xs={ 4 }>
              <img src={ data?.cover?.url.replace('thumb', '720p') } alt={ data?.name } style={{ width: '100%' }} />
            </Grid2>
            <Grid2 xs={ 8 }>
              <div>
                <Typography variant="body1" gutterBottom>
                  { data?.summary }
                </Typography>
              </div>
              <div>
                <Typography variant="subtitle1" gutterBottom>
                  category ratings
                </Typography>
              </div>
              <div>
                <Typography variant="subtitle1" gutterBottom>
                  reviews
                </Typography>
              </div>
            </Grid2>
          </Grid2>
          <br />
        </main>
      </Container>
      <Footer />
    </div>
  )
}

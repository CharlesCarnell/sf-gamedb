

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
  GameDetail,
  ReviewForm,
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
          setData(data);
          setLoading(false);
        })
    }
  }, [router])

  if (isLoading) {
    return (
      <div>
        <Head>
          <title>SFGDB </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Container maxWidth="md">
          <main>
            <Grid2 container spacing={ 2 }>
              <Grid2 xs={ 12 }>
                <Typography variant="h5" gutterBottom>
                  Loading game details..
                </Typography>
              </Grid2>
            </Grid2>
          </main>
        </Container>
        <Footer />
      </div>
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
        <title>SFGDB - {data.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container maxWidth="md">
        <main>
          <GameDetail data={ data } />
        </main>
      </Container>
      <Footer />
    </div>
  )
}

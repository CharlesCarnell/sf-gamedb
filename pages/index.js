import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';



import Grid2 from '@mui/material/Unstable_Grid2';

import {
  Container,
  Typography,
} from '@mui/material';

import {
  Header,
  Footer,
  GamesList,
} from '../components';

const fetchMostRecent = async (setRecentlyReviewed) => {
  return await fetch(`/api/games?sort=-most_recent_rating`)
    .then((res) => res.json())
    .then((data) => {
      setRecentlyReviewed(data);
      // setLoading(false);
    });
}

const fetchHighestRated = async (setHighestRated) => {
  return await fetch(`/api/games?sort=-average_overall_rating`)
    .then((res) => res.json())
    .then((data) => {
      setHighestRated(data);
      // setLoading(false);
    });
}

export default function Home() {

  const router = useRouter();
  
  // const [isLoading, setLoading] = useState(false);
  const [recentlyReviewed, setRecentlyReviewed] = useState(null);
  const [highestRated, setHighestRated] = useState(null);

  useEffect(() => {
    // setLoading(true);
    fetchMostRecent(setRecentlyReviewed);
    fetchHighestRated(setHighestRated);
  }, [router]);

  return (
    <div className={styles.container}>
      <Head>
        <title>SFGDB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container maxWidth="md">
        <main style={ { marginBottom: '300px' } }>
          <Grid2 container spacing={ 2 }>
            <GamesList data={ recentlyReviewed } title={ 'Recently Reviewed' } />
            <Grid2 xs={ 12 }>
              <hr />
            </Grid2>
            <GamesList data={ highestRated } title={ 'Highest Rated' } />
          </Grid2>
        </main>
      </Container>
      <Footer />
    </div>
  )
}

import Head from 'next/head';
import styles from '../styles/Home.module.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SFGDB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container maxWidth="md">
        <main>
          <Typography variant="h4" gutterBottom>
            Sickfrags GameDB
          </Typography>
          <Grid2 container spacing={ 2 }>
            <GamesList />
          </Grid2>
          <br />
        </main>
      </Container>
      <Footer />
    </div>
  )
}

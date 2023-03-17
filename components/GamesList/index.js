

import { styled } from '@mui/material/styles';
import Grid2 from '@mui/material/Unstable_Grid2';

import {
  Paper,
  Typography,
} from '@mui/material';

import GamesListItem from '../../components/GamesList/GamesListItem';

const games = [
  {
    title: 'Harry Potter',
    release_date: 'Feb 10th 2023',
    thumb: 'https://interfaceingame.com/wp-content/uploads/hogwards-legacy/hogwards-legacy-cover-375x500.png',
  },
  {
    title: 'Harry Potter',
    release_date: 'Feb 10th 2023',
    thumb: 'https://interfaceingame.com/wp-content/uploads/hogwards-legacy/hogwards-legacy-cover-375x500.png',
  },
  {
    title: 'Harry Potter',
    release_date: 'Feb 10th 2023',
    thumb: 'https://interfaceingame.com/wp-content/uploads/hogwards-legacy/hogwards-legacy-cover-375x500.png',
  },
  {
    title: 'Harry Potter',
    release_date: 'Feb 10th 2023',
    thumb: 'https://interfaceingame.com/wp-content/uploads/hogwards-legacy/hogwards-legacy-cover-375x500.png',
  },
  {
    title: 'Harry Potter',
    release_date: 'Feb 10th 2023',
    thumb: 'https://interfaceingame.com/wp-content/uploads/hogwards-legacy/hogwards-legacy-cover-375x500.png',
  },
  {
    title: 'Harry Potter',
    release_date: 'Feb 10th 2023',
    thumb: 'https://interfaceingame.com/wp-content/uploads/hogwards-legacy/hogwards-legacy-cover-375x500.png',
  },
  {
    title: 'Harry Potter',
    release_date: 'Feb 10th 2023',
    thumb: 'https://interfaceingame.com/wp-content/uploads/hogwards-legacy/hogwards-legacy-cover-375x500.png',
  },
  {
    title: 'Harry Potter',
    release_date: 'Feb 10th 2023',
    thumb: 'https://interfaceingame.com/wp-content/uploads/hogwards-legacy/hogwards-legacy-cover-375x500.png',
  },
];

const GamesList = () => (
  <>
    <Grid2 xs={ 12 }>
      <Typography variant="h5" gutterBottom>
        Recently Reviewed
      </Typography>
    </Grid2>
    { games.map((game, i) => {
      return (
        <Grid2 xs={ 4 }>
          <GamesListItem { ...game } />
        </Grid2>
      )
    })}
  </>
);


export default GamesList;

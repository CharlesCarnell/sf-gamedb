

import Grid2 from '@mui/material/Unstable_Grid2';

import {
  Typography,
} from '@mui/material';

import GamesListItem from '../../components/GamesList/GamesListItem';

const GamesList = ({ data }) => (
  <>
    <Grid2 xs={ 12 }>
      <Typography variant="overline" gutterBottom>
        Recently Reviewed
      </Typography>
    </Grid2>
    { data?.map((game, i) => {
      return (
        <Grid2 xs={ 4 }>
          <GamesListItem { ...game.game } average_overall_rating={ game.average_overall_rating } rating_count={ game.rating_count } />
        </Grid2>
      )
    })}
  </>
);


export default GamesList;

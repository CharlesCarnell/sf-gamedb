

import {
  pink,
  indigo,
  cyan,
  teal,
} from '@mui/material/colors';
import Grid2 from '@mui/material/Unstable_Grid2';
import Rating from './Rating';

const CategoryRatings = ({ ratings }) => (
  <>
    <Grid2 container spacing={ 2 }>
      <Grid2 xs={2}>
        <Rating name={ 'gameplay' } value={ ratings.gameplay } size="small"  />
      </Grid2>
      <Grid2 xs={2}>
        <Rating name={ 'replayability' } value={ ratings.replayability } size="small"  />
      </Grid2>
      <Grid2 xs={2}>
        <Rating name={ 'visuals' } value={ ratings.visuals } size="small"  />
      </Grid2>
      <Grid2 xs={2}>
        <Rating name={ 'story' } value={ ratings.story } size="small"  />
      </Grid2>
      <Grid2 xs={2}>
        <Rating name={ 'soundtrack' } value={ 'TODO' } size="small"  />
      </Grid2>
      <Grid2 xs={2}>
        <Rating name={ 'overall' } value={ 'TODO' } size="small"  />
      </Grid2>
    </Grid2>
  </>
);


export default CategoryRatings;

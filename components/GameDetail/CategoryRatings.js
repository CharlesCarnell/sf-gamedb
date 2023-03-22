

import Grid2 from '@mui/material/Unstable_Grid2';
import Rating from './Rating';

const CategoryRatings = ({ ratings }) => (
  <>
    <Grid2 container spacing={ 2 }>
      <Grid2 xs={ 12 } md={ 6 }>
        <Rating name={ 'gameplay' } value={ ratings.gameplay } />
      </Grid2>
      <Grid2 xs={ 12 } md={ 6 }>
        <Rating name={ 'replayability' } value={ ratings.replayability } />
      </Grid2>
      <Grid2 xs={ 12 } md={ 6 }>
        <Rating name={ 'visuals' } value={ ratings.visuals } />
      </Grid2>
      <Grid2 xs={ 12 } md={ 6 }>
        <Rating name={ 'story' } value={ ratings.story } />
      </Grid2>
    </Grid2>
  </>
);


export default CategoryRatings;

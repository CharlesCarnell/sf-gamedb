

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
      <Grid2 xs={ 12 } md={ 6 }>
        <Rating name={ 'gameplay' } value={ ratings.gameplay } size="small" color={ { color: pink[500] } } />
      </Grid2>
      <Grid2 xs={ 12 } md={ 6 }>
        <Rating name={ 'replayability' } value={ ratings.replayability } size="small" color={ { color: indigo[500] } } />
      </Grid2>
      <Grid2 xs={ 12 } md={ 6 }>
        <Rating name={ 'visuals' } value={ ratings.visuals } size="small" color={ { color: cyan[500] } } />
      </Grid2>
      <Grid2 xs={ 12 } md={ 6 }>
        <Rating name={ 'story' } value={ ratings.story } size="small" color={ { color: teal[500] } } />
      </Grid2>
    </Grid2>
  </>
);


export default CategoryRatings;

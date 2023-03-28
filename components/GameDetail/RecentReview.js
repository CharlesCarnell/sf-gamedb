

import {
  pink,
  indigo,
  cyan,
  teal,
} from '@mui/material/colors';
import Grid2 from '@mui/material/Unstable_Grid2';

import {
  Typography,
} from '@mui/material';

import Rating from './Rating';

export default function GameDetailRecentReview({ review }){
  return (
    <div>
      <Grid2 container spacing={ 2 }>
        <Grid2 xs={ 12 }>
          <Grid2 container spacing={ 2 }>
            <Grid2 xs={ 12 } md={ 6 }>
              <Typography variant="h6" gutterBottom>
                { review.user.name }
              </Typography>
            </Grid2>
            <Grid2 xs={ 12 } md={ 6 }>
              <Rating value={ review.rating_overall_generated } size="large" />
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 xs={ 12 }>
          <Typography variant="body2" gutterBottom>
            { review.review_body }
          </Typography>
        </Grid2>
        <Grid2 xs={ 12 }>
          <Grid2 container spacing={ 2 }>
            <Grid2 xs={ 12 } md={ 6 }>
              <Rating name={ 'gameplay' } value={ review.rating_gameplay } size="small" color={ { color: pink[500] } } />
            </Grid2>
            <Grid2 xs={ 12 } md={ 6 }>
              <Rating name={ 'replayability' } value={ review.rating_replayability } size="small" color={ { color: indigo[500] } } />
            </Grid2>
            <Grid2 xs={ 12 } md={ 6 }>
              <Rating name={ 'visuals' } value={ review.rating_visuals } size="small" color={ { color: cyan[500] } } />
            </Grid2>
            <Grid2 xs={ 12 } md={ 6 }>
              <Rating name={ 'story' } value={ review.rating_story } size="small" color={ { color: teal[500] } } />
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
      <hr />
    </div>
  );
}
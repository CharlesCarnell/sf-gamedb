

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
                { review.user.display_name }
              </Typography>
            </Grid2>
            <Grid2 xs={ 12 } md={ 6 }>
              <Rating value={ review.rating_overall_generated } />
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 xs={ 12 }>
          <Typography variant="body2" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
            idest laborum.
          </Typography>
        </Grid2>
        <Grid2 xs={ 12 }>
          <Grid2 container spacing={ 2 }>
            <Grid2 xs={ 12 } md={ 6 }>
              <Rating name={ 'gameplay' } value={ review.rating_gameplay } />
            </Grid2>
            <Grid2 xs={ 12 } md={ 6 }>
              <Rating name={ 'replayability' } value={ review.rating_replayability } />
            </Grid2>
            <Grid2 xs={ 12 } md={ 6 }>
              <Rating name={ 'visuals' } value={ review.rating_visuals } />
            </Grid2>
            <Grid2 xs={ 12 } md={ 6 }>
              <Rating name={ 'story' } value={ review.rating_story } />
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
      <hr />
    </div>
  );
}
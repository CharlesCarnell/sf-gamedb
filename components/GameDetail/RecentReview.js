

import {
  pink,
  indigo,
  cyan,
  teal,
} from '@mui/material/colors';
import Grid2 from '@mui/material/Unstable_Grid2';

import {
  Typography,
  Stack, 
  Item
} from '@mui/material';

import Rating from './Rating';

export default function GameDetailRecentReview({ review }){
  return (
    <div>
      <Grid2 container spacing={ 2 }>
        <Grid2 xs={ 12 }>
          <Grid2 container spacing={ 2 }>
            <Grid2 xs={ 2 }>
              <h4>Overall</h4>
              <hr />
              <Rating />
              <Typography>
                {review.user.name}
              </Typography>
            </Grid2>
            <Grid2 xs={10}>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
            </Grid2>
           </Grid2>
                
                <Grid2 container spacing={2} xs={12} >
                  <Grid2 xs={3}>
                    <Rating name={ 'gameplay' } value={ review.rating_gameplay } size="small" color={ { color: pink[500] } } />
                  </Grid2>
                  <Grid2 xs={3}>
                    <Rating name={ 'replayability' } value={ review.rating_replayability } size="small" color={ { color: indigo[500] } } />
                  </Grid2>
                  <Grid2 xs={3}>
                    <Rating name={ 'visuals' } value={ review.rating_visuals } size="small" color={ { color: cyan[500] } } />
                  </Grid2>
                  <Grid2 xs={3}>
                    <Rating name={ 'story' } value={ review.rating_story } size="small" color={ { color: teal[500] } } />
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

  {/* <Grid2 xs={ 12 } md={ 6 }>
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
  </Grid2> */}


import Grid2 from '@mui/material/Unstable_Grid2';

import {
  Typography,
} from '@mui/material';

import {
  ReviewForm,
} from '../../components';
import CategoryRatings from './CategoryRatings';
import RecentReviews from './RecentReviews';
import Rating from './Rating';

export default function GameDetail({ data }) {
  return (
    <div>
      <Grid2 container spacing={ 2 }>
        <Grid2 xs={ 12 }>
          <div style={{ float: 'left' }}>
            <Typography variant="h5" gutterBottom>
              { data?.name }
            </Typography>
          </div>
          <div style={{ float: 'right' }}>
            <Rating value={ data?.ratings.average.overall } size="large" />
            {/* <div>
              IGDB Rating - { data?.rating }
            </div>
            <div>
              SFGDB Rating - { data?.ratings.average.overall }
            </div>
            <div>
              SFGDB Rating Count - { data?.ratings.count }
            </div> */}
          </div>
        </Grid2>
        <Grid2 xs={ 4 }>
          <img src={ data?.cover?.url.replace('thumb', '720p') } alt={ data?.name } style={{ width: '100%' }} />
        </Grid2>
        <Grid2 xs={ 8 }>
          <Grid2 container spacing={ 2 }>
            <Grid2 xs={ 12 }>
              <Typography variant="body1" gutterBottom>
                { data?.summary }
              </Typography>
            </Grid2>
            <Grid2 xs={ 12 }>
              <CategoryRatings ratings={ data.ratings.average } />
            </Grid2>
            <Grid2 xs={ 12 }>
              <RecentReviews reviews={ data.reviews } />
            </Grid2>
            <Grid2 xs={ 12 }>
              <Typography variant="subtitle1" gutterBottom>
                Submit Review
              </Typography>
              <ReviewForm gameID={ data.id } />
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
      <br />
    </div>
  );
}
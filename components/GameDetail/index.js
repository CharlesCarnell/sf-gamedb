

import Grid2 from '@mui/material/Unstable_Grid2';

import {
  Typography,
} from '@mui/material';

import {
  ReviewForm,
} from '../../components';
import RecentReviews from './RecentReviews';

export default function GameDetail({ data }) {
  return (
    <div>
      <Typography variant="h4" gutterBottom onClick={ () => console.log('data', data) }>
        Sickfrags GameDB
      </Typography>
      <Grid2 container spacing={ 2 }>
        <Grid2 xs={ 12 }>
          <div style={{ float: 'left' }}>
            <Typography variant="h5" gutterBottom>
              { data?.name }
            </Typography>
          </div>
          <div style={{ float: 'right' }}>
            IGDB Rating - { data?.rating }
          </div>
        </Grid2>
        <Grid2 xs={ 4 }>
          <img src={ data?.cover?.url.replace('thumb', '720p') } alt={ data?.name } style={{ width: '100%' }} />
        </Grid2>
        <Grid2 xs={ 8 }>
          <div>
            <Typography variant="body1" gutterBottom>
              { data?.summary }
            </Typography>
          </div>
          <div>
            <Typography variant="subtitle1" gutterBottom>
              category ratings
            </Typography>
          </div>
          <div>
            <Typography variant="subtitle1" gutterBottom>
              reviews
            </Typography>
              <RecentReviews reviews={ data.ratings } />
          </div>
          <div>
            <Typography variant="subtitle1" gutterBottom>
              review form
            </Typography>
            <div>
              <ReviewForm />
            </div>
          </div>
        </Grid2>
      </Grid2>
      <br />
    </div>
  );
}
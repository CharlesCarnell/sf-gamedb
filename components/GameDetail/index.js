

import Grid2 from '@mui/material/Unstable_Grid2';

import {
  Typography,
  Card,
  CardMedia,
  CardContent,
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
        <Grid2 xs={ 12 } spacing={4}>
          
          {/* <div >
            <h3>SFGDB APPROVED RATING</h3>
            <Rating value={ data?.ratings.average.overall } size="large"  />
          </div> */}
        </Grid2>
        <Grid2 xs={ 4 }>
          <Card sx={{ maxWidth: 345, position:'relative' }}>
            <CardMedia
              sx={{ height: 400 }}
              image={ data?.cover?.url.replace('thumb', '720p') } alt={ data?.name } style={{ width: '100%' }}
              title={data?.name}
            />
            <CardContent sx={{
                position: "absolute",
                bottom: "0",
                width: "100%",
                textAlign: "center",
                color: "white",
                backgroundColor: "#9e61be75",
                
              }}
            >
              <Typography variant={'h5'}>               
                { data?.name }
              </Typography>
            </CardContent>
          </Card>
          <Rating name="Overall" value={ data.ratings.average.overall } />
        </Grid2>
              
        <Grid2 xs={ 8 }>
          <Grid2 container spacing={ 2 }>
            <Grid2 xs={ 12 }>
              <hr />
              <Typography variant="h6">Average SFGDB Approved Ratings</Typography>
              <CategoryRatings ratings={ data.ratings.average } />
              <hr />
            </Grid2>
            <Grid2 xs={ 12 }>
              <Typography variant="body1" gutterBottom>
                { data?.summary }
              </Typography>
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
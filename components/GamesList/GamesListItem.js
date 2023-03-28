
import Rating from '../GameDetail/Rating'
import Link from 'next/link';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'

// first_release_date = new Date(0);
// first_release_date.setUTCSeconds(gameToRecord.first_release_date);
// first_release_date.toISOString();

const GamesListItem = ({ average_overall_rating, rating_count, cover_image, name, slug, ratings }) => (
  <Card sx={{ maxWidth: 345 }}>
    <Link href={ `game/${slug}` }>
      <CardMedia
        sx={{ height: 140 }}
        image={ cover_image.replace('thumb', '720p') }
        title={ name }
        />
    </Link>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" sx={{backgroundColor: "primary.lightpurple",
                opacity: "0.66"}}>
        { name }
      </Typography>
      <div>
        <Rating value={ Number(average_overall_rating).toFixed(1) } size="small" />
      </div>
      <div>
        Ratings: { rating_count }
      </div>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);


export default GamesListItem;

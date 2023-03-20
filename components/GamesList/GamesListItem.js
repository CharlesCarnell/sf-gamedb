

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

const GamesListItem = ({ cover_image, first_release_date, name, slug }) => (
  <Card sx={{ maxWidth: 345 }}>
    <Link href={ `game/${slug}` }>
      <CardMedia
        sx={{ height: 140 }}
        image={ cover_image.replace('thumb', '720p') }
        title={ name }
        />
    </Link>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        { name }
      </Typography>
      <Typography variant="body2" color="text.secondary">
        { first_release_date }
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);


export default GamesListItem;

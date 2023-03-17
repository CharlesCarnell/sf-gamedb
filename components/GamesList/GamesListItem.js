

import Link from 'next/link';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'



const GamesListItem = ({ title, release_date, thumb }) => (
  <Card sx={{ maxWidth: 345 }}>
    <Link href="/game/hogwarts-legacy">
      <CardMedia
        sx={{ height: 140 }}
        image={ thumb }
        title={ title }
        />
    </Link>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        { title }
      </Typography>
      <Typography variant="body2" color="text.secondary">
        { release_date }
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);


export default GamesListItem;

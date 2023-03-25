

import Grid2 from '@mui/material/Unstable_Grid2';

import {
  Box,
  Container,
  Typography,
} from '@mui/material';


export default function Footer() {
  return (
    <Box
      sx={ {
        width: "100%",
        height: "auto",
        bottom: 0,
        backgroundColor: "primary.dark",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      } }
    >
      <Container maxWidth="lg">
        <Grid2 container direction="column" alignItems="center">
          <Grid2 item xs={ 12 }>
            <Typography color="black" variant="h5">
              SFGDB
            </Typography>
          </Grid2>
          <Grid2 item xs={ 12 }>
            <Typography color="grey.900" variant="subtitle1">
              { `${ new Date().getFullYear() }` }
            </Typography>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

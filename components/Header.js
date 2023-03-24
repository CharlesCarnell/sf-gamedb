

import { useSession, signIn, signOut } from "next-auth/react"

import Link from 'next/link';

import { styled, alpha } from '@mui/material/styles';

import {
  AppBar,
  Badge,
  Box,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';

import {
  AccountCircle,
  Mail,
  More,
  Notifications,
} from '@mui/icons-material';

import {
  Search,
} from '../components'

const StyledSearch = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

export default function Header() {
  const { data: session } = useSession();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ mb: '40px' }}>
          <Container maxWidth="md">
            <Toolbar>
              <Link href="/">
                <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' }}}>
                  SFGDB
                </Typography>
              </Link>
              <StyledSearch>
                <Search />
              </StyledSearch>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={ { display: { xs: 'none', md: 'flex' } } }>
                { session ?
                  <>
                    <Stack spacing={ 2 } direction="row">
                      <span onClick={ () => console.log('session', session) }>Session Log</span>
                      <span onClick={ () => signOut() }>Logout</span>
                    </Stack>
                  </>
                  :
                  <>
                    <Stack spacing={ 2 } direction="row">
                      <span onClick={ () => signIn() }>Login</span>
                      <span>Register</span>
                    </Stack>
                  </>
                }
                <IconButton size="large" color="inherit">
                  <Badge badgeContent={ 4 } color="error">
                    <Mail />
                  </Badge>
                </IconButton>
                <IconButton size="large" color="inherit">
                  <Notifications />
                </IconButton>
                <IconButton size="large" edge="end" color="inherit">
                  <AccountCircle />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
                <IconButton size="large" color="inherit">
                  <More />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};


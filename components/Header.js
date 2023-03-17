import Link from 'next/link';

import {
  Container,
  Stack,
} from '@mui/material';

import {
  Search,
} from '../components'

const Header = () => (
  <Container maxWidth="md">
    <Stack spacing={ 2 } direction="row">
      <Link href="/"><span>Homerpage</span></Link> 
      <Link href="/"><span>Login</span></Link> 
      <Link href="/"><span>Register</span></Link> 
      <Search />
    </Stack>
  </Container>
);

export default Header;

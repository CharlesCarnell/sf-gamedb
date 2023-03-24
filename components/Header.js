

import { useSession, signIn, signOut } from "next-auth/react"

import Link from 'next/link';

import {
  Container,
  Stack,
} from '@mui/material';

import {
  Search,
} from '../components'

export default function Header() {
  const { data: session } = useSession();

  return (
    <Container maxWidth="md">
      <Stack spacing={ 2 } direction="row">
        <Link href="/">
          <span>Homepage</span>
        </Link>
        { session ? 
          <>
            <span onClick={ () => console.log('session', session) }>Session Log</span>
            <span onClick={ () => signOut() }>Logout</span>
          </>
          :
          <>
            <span onClick={ () => signIn() }>Login</span>
            <span>Register</span>
          </>
        }
        <Search />
      </Stack>
    </Container>
  );
};




import { useEffect } from 'react'
import {
  Controller,
  useForm,
} from 'react-hook-form';
import { useSession } from 'next-auth/react';

import Grid2 from '@mui/material/Unstable_Grid2';
import {
  Alert,
  Button,
  TextField,
} from '@mui/material';

async function postForm(formValues, session) {
  const response = await fetch(`/api/users/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: formValues.name,
      image: formValues.image,
    })
  });
}

export default function UserProfileForm({ gameID }) {
  const { data: session } = useSession();

  const { control, register, reset, handleSubmit } = useForm({
    validateCriteriaMode: "all",
    reValidateMode: "onChange",
    mode: "onChange",
    defaultValues: {
      name: session?.user?.name,
      image: session?.user?.image,
    },
  });

  useEffect(() => {
    if ( session?.user.id ) {
      reset(session.user);
    }
  }, [session]);

  const onSubmit = data => postForm(data, session);

  if (!session) {
    return (
      <>
        <Grid2 container spacing={ 2 }>
          <Grid2 xs={ 12 }>
            <Alert severity="warning">
              You need to be logged in to submit reviews!
            </Alert>
          </Grid2>
        </Grid2>
      </>
    );
  }

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <Grid2 container spacing={ 2 }>
        <Grid2 xs={ 12 } md={ 12 }>
          <Controller
            name="name"
            control={ control }
            render={ ({ field: { onChange, value } }) => (
              <TextField onChange={onChange} value={ value } label="Display Name" />
            )}
          />
        </Grid2>
        <Grid2 xs={ 12 } md={ 12 }>
          <Controller
            name="image"
            control={ control }
            render={ ({ field: { onChange, value } }) => (
              <TextField onChange={ onChange } value={ value } label="Profile Image" />
            ) }
          />
        </Grid2>
        <Grid2 xs={ 12 } md={ 12 }>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Grid2>
      </Grid2>
    </form>
  )
}

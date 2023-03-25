

import {
  useForm,
} from 'react-hook-form';
import { useSession } from 'next-auth/react';

import Grid2 from '@mui/material/Unstable_Grid2';
import {
  Alert
} from '@mui/material';

async function postForm(formValues, session) {

  console.log('session', session);
  console.log('formValues', formValues);

  // const post = await fetch(`/api/ratings/game/`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     ...formValues,
  //     user_id,
  //   })
  // })
}

export default function UserProfileForm({ gameID }) {
  const { data: session } = useSession();

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

  const { control, register, handleSubmit } = useForm({
    validateCriteriaMode: "all",
    reValidateMode: "onChange",
    mode: "onChange"
  });

  const onSubmit = data => postForm(data, session);

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <Grid2 container spacing={ 2 }>
        <Grid2 xs={ 12 } md={ 12 }>
          <input { ...register("name", { required: true }) } />
        </Grid2>
        <Grid2 xs={ 12 } md={ 12 }>
          <input type="submit" />
        </Grid2>
      </Grid2>
    </form>
  )
}

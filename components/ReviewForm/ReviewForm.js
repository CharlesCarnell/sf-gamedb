

import {
  useForm,
} from 'react-hook-form';
import { useSession } from 'next-auth/react';

import Grid2 from '@mui/material/Unstable_Grid2';
import {
  Alert
} from '@mui/material';

import RatingInput from './RatingInput';

async function postForm(formValues, user_id, gameID) {
  if (!gameID || !user_id ) {
    alert('User ID or Game ID not supplied!');
  }

  const post = await fetch(`/api/ratings/game/${gameID}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...formValues,
      user_id,
    })
  })
}

const ratingOptions = Array.from({ length: 10 }, (v, k) => {
  return {
    id: String(k + 1),
    label: String(k + 1),
    value: String(k + 1)
  }}
); 

export default function ReviewForm({ gameID }) {
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

  const { control, handleSubmit } = useForm({
    validateCriteriaMode: "all",
    reValidateMode: "onChange",
    mode: "onChange"
  });

  const onSubmit = data => postForm(data, session.user.id, gameID);

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <Grid2 container spacing={ 2 }>
        <Grid2 xs={ 12 } md={ 12 }>
          <RatingInput
            control={ control }
            name="rating_gameplay"
            label="Gameplay"
            options={ ratingOptions }
          />
        </Grid2>
        <Grid2 xs={ 12 } md={ 12 }>
          <RatingInput
            control={ control }
            name="rating_replayability"
            label="Replayability"
            options={ ratingOptions }
          />
        </Grid2>
        <Grid2 xs={ 12 } md={ 12 }>
          <RatingInput
            control={ control }
            name="rating_visuals"
            label="Visuals"
            options={ ratingOptions }
          />
        </Grid2>
        <Grid2 xs={ 12 } md={ 12 }>
          <RatingInput
            control={ control }
            name="rating_story"
            label="Story"
            options={ ratingOptions }
          />
        </Grid2>
        <Grid2 xs={ 12 } md={ 12 }>
          <input type="submit" />
        </Grid2>
      </Grid2>
    </form>
  )
}

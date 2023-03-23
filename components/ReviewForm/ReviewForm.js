

import {
  useForm,
} from 'react-hook-form';

import Grid2 from '@mui/material/Unstable_Grid2';

import RatingInput from './RatingInput';

async function postForm(formValues, gameID = 1911) {
  const post = await fetch(`/api/ratings/game/${gameID}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...formValues,
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
  const { control, handleSubmit } = useForm({
    validateCriteriaMode: "all",
    reValidateMode: "onChange",
    mode: "onChange"
  });

  const onSubmit = data => postForm(data, gameID);

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <Grid2 container spacing={ 2 }>
        <Grid2 xs={ 12 }>
          <RatingInput
            control={ control }
            name="user_id"
            label="User ID"
            options={ ratingOptions }
          />
        </Grid2>
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

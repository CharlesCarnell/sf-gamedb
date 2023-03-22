

import {
  useState,
  // useEffect
} from 'react';

import {
  useForm,
} from 'react-hook-form';

async function postForm(formValues) {
  console.log('postForm', formValues);
  // TODO: replace hardcoded game ID
  const post = await fetch('/api/ratings/game/1911', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...formValues,
    })
  })
}

export default function ReviewForm() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => postForm(data);

  // console.log(watch('example'));

  return (
    <div>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <input { ...register('user_id', { required: true }) } type="number" defaultValue="1" />
        <input { ...register('rating_gameplay', { required: true }) } type="number" defaultValue="6" />
        <input { ...register('rating_replayability', { required: true }) } type="number" defaultValue="6" />
        <input { ...register('rating_visuals', { required: true }) } type="number" defaultValue="6" />
        <input { ...register('rating_story', { required: true }) } type="number" defaultValue="6" />
        <input { ...register('rating_overall_generated', { required: true }) } type="number" defaultValue="6" />
        {/* { errors.exampleRequired && <span>This field is required</span> } */}

        <input type="submit" />
      </form>
    </div>
  )
}

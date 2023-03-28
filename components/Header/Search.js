

import { useState, useEffect } from 'react'

import { useRouter } from 'next/router';

import {
  Autocomplete,
  Button,
  Stack,
  TextField,
} from '@mui/material'


export default function Search() {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
      setLoading(true);
      fetch(`/api/games/name/sonic`)
        .then((res) => res.json())
        .then((data) => {
          const formattedData = [];
          for (const [key, value] of Object.entries(data)) {
            formattedData.push( { ...data[key], label: data[key].name });
          }
          setData(formattedData);
          setLoading(false);
        })
  }, [])

  useEffect(() => {
    setLoading(true);
    if ( inputValue.length >= 3 ) {
      fetch(`/api/games/name/${inputValue}`)
        .then((res) => res.json())
        .then((data) => {
          const formattedData = [];
          for (const [key, value] of Object.entries(data)) {
            formattedData.push( { ...data[key], label: data[key].name });
          }
          setData(formattedData);
          setLoading(false);
        })
    }
  }, [inputValue])

  return (
    <div>
      <Stack spacing={ 2 } direction="row">
        <Autocomplete
          value={ value }
          onChange={ (e, newValue) => {
            setValue(newValue);
            if ( newValue?.slug ) router.push(`/game/${newValue.slug}`);
          }}
          inputValue={ inputValue }
          onInputChange={ (e, newInputValue) => {
            setInputValue(newInputValue);
          }}
          disablePortal
          options={ data }
          sx={{ width: 300 }}
          renderInput={(params) => <TextField size="small" margin="normal" {...params} label="Search videogames" />}
        />
      </Stack>
    </div>
  );
}

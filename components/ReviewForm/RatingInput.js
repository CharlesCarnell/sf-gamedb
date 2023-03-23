


import {
  Controller,
} from "react-hook-form"

import {
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';

export default function RatingInput({ name, label, options, control, defaultValue = 1, ...fields }) {
  return (
    <>
      <Controller
        control={ control }
        name={ name }
        defaultValue={ defaultValue }
        render={ ({ field: { onChange, value } }) => (
          <>
            { label &&
              <>
                <Typography variant="overline" gutterBottom>
                  { label }
                </Typography>
                <br />
              </>
            }
            <ToggleButtonGroup
              type="radio"
              label={ label }
              exclusive
              enforceAtLeastOneSelected
              value={ value }
              onChange={ onChange }
            >
              { options.map((option, i) => {
                return (
                  <ToggleButton key={ option.id } value={ option.value }>
                    { option.label }
                  </ToggleButton>
                )
              }) }
            </ToggleButtonGroup>
          </>
        ) }
      />
    </>
  );
};
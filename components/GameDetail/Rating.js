import { styled } from '@mui/material/styles';

import {
  Box,
  Rating,
  Typography,
} from '@mui/material';

import {
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentSatisfied,
  SentimentSatisfiedAlt,
  SentimentVerySatisfied,
} from '@mui/icons-material';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfied color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfied color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfied color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAlt color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfied color="success" />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

const rating_overall_generated = ({ name, value }) => (
  <>
    { name &&
      <>
        <Typography variant="overline" gutterBottom>
          { name }
        </Typography>
        <br />
      </>
    }
    <StyledRating
      name="highlight-selected-only"
      value={ value }
      IconContainerComponent={IconContainer}
      getLabelText={(value) => customIcons[value].label}
      // highlightSelectedOnly
      disabled
    />
  </>
);


export default rating_overall_generated;

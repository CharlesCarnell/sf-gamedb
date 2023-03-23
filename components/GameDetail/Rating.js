import { styled } from '@mui/material/styles';

import {
  Rating,
  Typography,
} from '@mui/material';

import {
  Star,
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

// const customIcons = {
//   1: {
//     icon: <SentimentVeryDissatisfied color="error" />,
//     label: 'Very Dissatisfied',
//   },
//   2: {
//     icon: <SentimentDissatisfied color="error" />,
//     label: 'Dissatisfied',
//   },
//   3: {
//     icon: <SentimentSatisfied color="warning" />,
//     label: 'Neutral',
//   },
//   4: {
//     icon: <SentimentSatisfiedAlt color="success" />,
//     label: 'Satisfied',
//   },
//   5: {
//     icon: <SentimentVerySatisfied color="success" />,
//     label: 'Very Satisfied',
//   },
// };

// function IconContainer(props) {
//   const { value, ...other } = props;
//   return <span {...other}>{customIcons[value].icon}</span>;
// }

const rating_overall_generated = ({ name, value, size = "medium", color = null }) => (
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
      precision={ 0.5 }
      name="highlight-selected-only"
      // Divide the 1-10 rating by 2 to present in the 5 star layout
      value={ value / 2 }
      size={ size }
      // IconContainerComponent={IconContainer}
      // getLabelText={(value) => customIcons[value].label}
      // highlightSelectedOnly
      readOnly
      icon={ <Star fontSize="inherit" sx={ color } /> }
    />
  </>
);


export default rating_overall_generated;

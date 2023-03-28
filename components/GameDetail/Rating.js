import { styled } from '@mui/material/styles';

import {
  Rating,
  Typography,
  Avatar,
  avatarClasses
} from '@mui/material';

import {
  Star,
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentSatisfied,
  SentimentSatisfiedAlt,
  SentimentVerySatisfied,
} from '@mui/icons-material';
import { purple } from '@mui/material/colors';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

function percentageToColor(percentage, maxHue = 120, minHue = 0) {
  const hue = percentage * 12;
  return `hsl(${hue}, 100%, 50%)`;
}



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

const rating_overall_generated = ({ name, value, size = "medium" }) => (
  <>
    <div style={{
      display: 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
    }}>
      {name &&
        <>
          <Typography variant="overline" gutterBottom>
            {name}
          </Typography>
        </>
      }
      <Avatar
        sx={{
          width: 66,
          height: 66,
          backgroundColor: percentageToColor(value),
          border: 4,
          borderColor: 'gray',
        }}
        src={value}
      >
        {value}
      </Avatar>
  </div>
  </>
);


export default rating_overall_generated;

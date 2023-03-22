import RecentReview from './RecentReview';

const GameDetailRecentReviews = ({ reviews }) => (
  <>
    { reviews && reviews.length > 0 && reviews?.map( (review, i) => {
      return (
        <RecentReview review={ review } />
      )
    })}
  </>
);


export default GameDetailRecentReviews;

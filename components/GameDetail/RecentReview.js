

const GameDetailRecentReview = ({ review }) => (
  <div>
    <hr />
    <div>
      Author: { review.user.display_name }
    </div>
    <div>
      Gameplay: { review.rating_gameplay }
    </div>
    <div>
      Replayability: { review.rating_gameplay }
    </div>
    <div>
      Visuals: { review.rating_visuals }
    </div>
    <div>
      Story: { review.rating_story }
    </div>
    <div>
      Overall: { review.rating_overall_generated }
    </div>
    <hr />
  </div>
);


export default GameDetailRecentReview;

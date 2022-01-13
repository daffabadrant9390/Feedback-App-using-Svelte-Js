<script>
  import { FeedbackStore } from "../stores/FeedbackStore";

  $: feedbackCount = $FeedbackStore.length;
  $: ratingAvg = (
    $FeedbackStore.reduce(
      (accumulator, { rating }) => accumulator + rating,
      0
    ) / $FeedbackStore.length
  ).toFixed(1);
</script>

<div class="feedback-stats">
  <h4>Number of Feedbacks : {feedbackCount}</h4>
  <h4>Rating Average : {ratingAvg}</h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

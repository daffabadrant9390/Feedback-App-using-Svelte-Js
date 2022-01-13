<script>
  export let feedbackCount;
  export let ratingAvg;
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

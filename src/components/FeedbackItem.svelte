<script>
  import { FeedbackStore } from "../stores/FeedbackStore";
  import Card from "./Card.svelte";
  export let feedback;

  // Create custom event object using createEventDispatcher
  const handleDeleteFeedback = (feedbackId) => {
    FeedbackStore.update((currentFeedback) => {
      return currentFeedback.filter((item) => item.id != feedbackId);
    });
  };
</script>

<Card>
  <div class="rating-display">{feedback.rating}</div>
  <button class="btn-close" on:click={() => handleDeleteFeedback(feedback.id)}
    >x</button
  >
  <p class="feedback-text">{feedback.text}</p>
</Card>

<style>
  .rating-display {
    position: absolute;
    width: 50px;
    height: 50px;
    top: -14px;
    left: -18px;
    background-color: orange;
    color: #fff;
    font-weight: bold;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-close {
    border: none;
    background: none;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    color: #fff;
    background-color: rgba(255, 0, 0, 0.6);
    width: 30px;
    height: 30px;
    border: 1px solid #eee;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.5s;
  }

  .btn-close:hover {
    background-color: rgba(255, 0, 0, 1);
    transform: scale(1.1);
  }

  .feedback-text {
    margin: 12px;
  }
</style>

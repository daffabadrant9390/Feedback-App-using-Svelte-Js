<script>
  // Import Transition Module
  import { fade, scale } from "svelte/transition";
  import { FeedbackStore } from "../stores/FeedbackStore";
  import FeedbackItem from "./FeedbackItem.svelte";
  export let feedbacksData;
  console.log(feedbacksData);
</script>

<!-- Loop the feedbacksData and set as props to FeedbackItem -->
{#each $FeedbackStore as feedback (feedback.id)}
  <!-- Set transition to the FeedbackList by import the module -->
  <div in:scale out:fade={{ duration: 500 }}>
    <FeedbackItem {feedback} />
  </div>
{/each}

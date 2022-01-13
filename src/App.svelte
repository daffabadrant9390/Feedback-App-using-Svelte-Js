<script>
  import { FeedbackStore } from "./stores/FeedbackStore";
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";
  import FeedbackForm from "./components/FeedbackForm.svelte";
</script>

<div class="container">
  <FeedbackForm />
  {#if $FeedbackStore.length > 0}
    <FeedbackStats />
    <FeedbackList />
  {:else}
    <p class="empty-msg">Feedback is empty</p>
  {/if}
</div>

<style>
  .empty-msg {
    text-align: center;
  }
</style>

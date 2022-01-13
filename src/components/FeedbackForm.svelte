<script>
  import { v4 as uuidv4 } from "uuid";
  import { FeedbackStore } from "../stores/FeedbackStore";
  import Card from "./Card.svelte";
  import Button from "./Button.svelte";
  import RatingSelected from "./RatingSelected.svelte";

  let text = "";
  let rating = 10;
  let btnDisabled = false;
  let min = 10;
  let message;

  // Function to handle the selected Rating
  const handleRatingSelect = (e) => (rating = e.detail);

  // Function to handle the input from form
  const handleInput = () => {
    if (text.trim().length < 10) {
      message = `Your feedback must be more than ${min} characters`;
      btnDisabled = true;
    } else {
      message = null;
      btnDisabled = false;
    }
  };

  // Function to handle the form when it submitted
  const handleSubmitForm = () => {
    // Check if the input.length is larger than min
    if (text.trim().length > min) {
      let newFeedback = {
        id: uuidv4(),
        text,
        rating: +rating,
      };

      FeedbackStore.update((currentFeedback) => {
        return [newFeedback, ...currentFeedback];
      });
      // Reset the input to empty again
      text = "";
    }
  };
</script>

<Card>
  <header>
    <h2>How would you rate your service with us?</h2>
  </header>
  <form on:submit|preventDefault={handleSubmitForm}>
    <RatingSelected on:rating-select={handleRatingSelect} />
    <div class="input-group">
      <input
        type="text"
        placeholder="Tell us something do you like"
        on:input={handleInput}
        bind:value={text}
      />
      <Button type="submit" disabled={btnDisabled}>Send</Button>
    </div>
    {#if message}
      <p class="message">{message}</p>
    {/if}
  </form>
</Card>

<style>
  header {
    margin-bottom: 24px;
    text-align: center;
  }

  header h2 {
    font-weight: normal;
  }

  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
  }

  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
    margin-right: 10px;
  }

  input:focus {
    outline: none;
  }

  .message {
    padding-top: 12px;
    text-align: center;
    color: rebeccapurple;
  }
</style>

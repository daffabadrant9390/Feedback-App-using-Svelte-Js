<script>
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";
  import FeedbackForm from "./components/FeedbackForm.svelte";
  let feedbacksData = [
    {
      id: 1,
      rating: 8,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit duis tristique sollicitudin. Dignissim convallis aenean et tortor at risus.",
    },
    {
      id: 2,
      rating: 9,
      text: "Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Dignissim diam quis enim lobortis scelerisque. Nisl pretium fusce id velit. Magnis dis parturient montes nascetur ridiculus mus. Mauris rhoncus aenean vel elit. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. ",
    },
    {
      id: 3,
      rating: 7.5,
      text: "Magna fringilla urna porttitor rhoncus dolor purus non. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Varius vel pharetra vel turpis nunc eget lorem. Rhoncus dolor purus non enim praesent elementum. Enim blandit volutpat maecenas volutpat blandit aliquam.",
    },
  ];

  const deleteFeedback = (e) => {
    const feedbackId = e.detail;
    feedbacksData = feedbacksData.filter((item) => item.id != feedbackId);
  };

  const addNewFeedback = (e) => {
    let newDataFeedback = e.detail;
    feedbacksData = [newDataFeedback, ...feedbacksData];
  };

  $: feedbackCount = feedbacksData.length;
  $: ratingAvg = (
    feedbacksData.reduce((acc, { rating }) => acc + rating, 0) /
    feedbacksData.length
  ).toFixed(1);
</script>

<div class="container">
  <FeedbackForm on:add-feedback={addNewFeedback} />
  {#if feedbackCount > 0}
    <FeedbackStats {feedbackCount} {ratingAvg} />
    <FeedbackList {feedbacksData} on:delete-feedback={deleteFeedback} />
  {:else}
    <p class="empty-msg">Feedback is empty</p>
  {/if}
</div>

<style>
  .empty-msg {
    text-align: center;
  }
</style>

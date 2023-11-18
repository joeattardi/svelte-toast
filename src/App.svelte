<script>
  import NotificationContainer from './NotificationContainer.svelte';
  import { showNotification } from './notificationStore';

  function handleClick() {
    showNotification({ message: 'Hello world!' });
  }

  function handleClickSuccess() {
    showNotification({ type: 'success', message: 'Success!' });
  }

  function handleClickError() {
    showNotification({ type: 'error', message: 'An error occurred!' });
  }
</script>

<NotificationContainer />
<main>
  <h1>Svelte Toast</h1>
  <div class="buttons">
    <button on:click={handleClick}>Show Notification</button>
    <button on:click={handleClickSuccess}>Show Success</button>
    <button on:click={handleClickError}>Show Error</button>
  </div>
</main>

<style>
  .buttons {
    display: flex;
    gap: 8px;
    flex-direction: column;
    width: 250px;
  }
</style>
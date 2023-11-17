<script>
  import NotificationContainer from './NotificationContainer.svelte';
  import { showNotification } from './notificationStore';

  function handleClick() {
    showNotification({ message: 'Hello world!' });
  }
</script>

<NotificationContainer />
<main>
  <h1>Svelte Toast</h1>
  <button on:click={handleClick}>Show Notification</button>
</main>

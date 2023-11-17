<script>
  import NotificationContainer from './NotificationContainer.svelte';

  let showNotification = false;

  function handleClick() {
    showNotification = true;
  }
</script>

<NotificationContainer showNotification={showNotification} />
<main>
  <h1>Svelte Toast</h1>
  <button on:click={handleClick}>Show Notification</button>
</main>

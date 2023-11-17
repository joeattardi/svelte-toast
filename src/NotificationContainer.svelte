<script>
  import Notification from './Notification.svelte';

  export let showNotification = true;

  const testNotification = {
    message: 'Hello world!'
  };
</script>

<ul class="notification-container">
  {#if showNotification}
    <Notification notification={testNotification} />
  {/if}
</ul>

<style>
  .notification-container {
    width: 350px;
    padding: 1rem;
    position: fixed;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
</style>

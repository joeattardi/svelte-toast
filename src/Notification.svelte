<script>
  import { removeNotification } from './notificationStore';

  export let notification;

  function handleClickClose() {
    removeNotification(notification);
  }
</script>

<li 
  class="notification"
  class:success={notification.type === 'success'}
  class:error={notification.type === 'error'}
>
  <div class="message">{notification.message}</div>
  <button on:click={handleClickClose} class="close-button">&times;</button>
</li>

<style>
  .notification {
    background-color: #cccccc;
    padding: 1em;
    margin: 1em;
    display: flex;
    align-items: center;
  }

  .message {
    flex-grow: 1;
  }

  .success {
    background-color: #86efac;
  }

  .error {
    background-color: #fca5a5;
  }

  .close-button {
    background: transparent;
    border: none;
  }
</style>

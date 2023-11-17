<script>
  export let notification;
</script>

<li 
  class="notification"
  class:success={notification.type === 'success'}
  class:error={notification.type === 'error'}
>
  <div class="message">{notification.message}</div>
</li>

<style>
  .notification {
    background-color: #cccccc;
    padding: 1em;
    margin: 1em;
  }

  .success {
    background-color: #86efac;
  }

  .error {
    background-color: #fca5a5;
  }
</style>

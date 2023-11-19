import { writable } from 'svelte/store';

export const notificationStore = writable([]);

export function showNotification(notification) {
  notificationStore.update(notifications => [
    notification,
    ...notifications
  ]);

  setTimeout(() => {
    removeNotification(notification);
  }, 4000);
}

export function removeNotification(notification) {
  notificationStore.update(notifications => notifications.filter(n => n !== notification));
}

export function trackPromise(promise) {
  showNotification({ message: 'Starting operation' });
  promise
    .then(message => showNotification({ type: 'success', message }))
    .catch(error => showNotification({ type: 'error', message: error.message }));
}

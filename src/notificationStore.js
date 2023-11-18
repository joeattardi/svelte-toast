import { writable } from 'svelte/store';

export const notificationStore = writable([]);

export function showNotification(notification) {
  notificationStore.update(notifications => [
    notification,
    ...notifications
  ]);
}

export function removeNotification(notification) {
  notificationStore.update(notifications => notifications.filter(n => n !== notification));
}

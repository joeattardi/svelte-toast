import { writable } from 'svelte/store';

export const notificationStore = writable([]);

export function showNotification(notification) {
  notificationStore.update(notifications => [
    notification,
    ...notifications
  ]);
}

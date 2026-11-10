import { useSyncExternalStore } from "react";

/**
 * Tiny shared flag: has the welcome/loader screen finished?
 * The hero waits for it so its entrance animation plays as the loader fades,
 * but repeat visits and reduced-motion visitors see the hero straight away.
 */
let done = false;
const listeners = new Set<() => void>();

export function markWelcomeDone() {
  if (done) return;
  done = true;
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useWelcomeDone() {
  return useSyncExternalStore(
    subscribe,
    () => done,
    () => false,
  );
}

"use client";

import { useEffect } from "react";

/**
 * ServiceWorkerCleaner:
 * Checks for and cleanly unregisters any stale/legacy service workers
 * that may have been previously registered in the browser for localhost,
 * eliminating repeated 404 /sw.js network requests and console errors.
 */
export function ServiceWorkerCleaner() {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((reg) => {
          reg.unregister().catch(() => {
            // Silently ignore failed unregistrations
          });
        });
      });
    }
  }, []);

  return null;
}

import { env } from "../env";

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, unknown>;
}

export const trackEvent = (event: AnalyticsEvent): void => {
  if (!env.NEXT_PUBLIC_ANALYTICS_ENABLED) {
    return;
  }
  // Safe telemetry stub for privacy-friendly analytics
  console.log(`[Analytics] ${event.name}:`, event.properties);
};

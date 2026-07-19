/// <reference types="vite/client" />
import posthog from 'posthog-js'

const posthogKey = import.meta.env.VITE_POSTHOG_KEY

if (posthogKey) {
  posthog.init(posthogKey, {
    api_host: import.meta.env.VITE_POSTHOG_HOST,
    person_profiles: 'identified_only',
    capture_pageview: true,
    capture_exceptions: true,
  })
}

export default posthog

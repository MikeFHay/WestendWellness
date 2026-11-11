import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  index('./App.tsx'),
  route('waitlist_privacy', './WaitlistPrivacy.tsx'),
  route('classes', './classes.tsx'),
  route('instructors', './instructors.tsx'),
  route('memberships', './memberships.tsx'),
  route('services', './services.tsx'),
  route('faq', './faq.tsx'),
] satisfies RouteConfig

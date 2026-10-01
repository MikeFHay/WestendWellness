import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  index('./App.tsx'),
  route('waitlist_privacy', './WaitlistPrivacy.tsx'),
  route('classes', './classes.tsx'),
] satisfies RouteConfig

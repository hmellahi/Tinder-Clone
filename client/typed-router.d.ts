
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

/// <reference types="unplugin-vue-router/client" />

import type {
  // type safe route locations
  RouteLocationTypedList,
  RouteLocationResolvedTypedList,
  RouteLocationNormalizedTypedList,
  RouteLocationNormalizedLoadedTypedList,

  // helper types
  // route definitions
  RouteRecordInfo,
  ParamValue,
  ParamValueOneOrMore,
  ParamValueZeroOrMore,
  ParamValueZeroOrOne,

  // vue-router extensions
  _RouterTyped,
  RouterLinkTyped,
  NavigationGuard,
  UseLinkFnTyped,
} from 'unplugin-vue-router'

declare module '@vue-router/routes' {
  export interface RouteNamedMap {
    'home': RouteRecordInfo<'home', '/', Record<never, never>, Record<never, never>>,
    '/[...all]': RouteRecordInfo<'/[...all]', '/:all(.*)', { all: ParamValue<true> }, { all: ParamValue<false> }>,
    'messages': RouteRecordInfo<'messages', '/chat', Record<never, never>, Record<never, never>>,
    '/ConfirmationEmailSent': RouteRecordInfo<'/ConfirmationEmailSent', '/ConfirmationEmailSent', Record<never, never>, Record<never, never>>,
    'messages': RouteRecordInfo<'messages', '/conversation/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/FirstAuth': RouteRecordInfo<'/FirstAuth', '/FirstAuth', Record<never, never>, Record<never, never>>,
    '/Login': RouteRecordInfo<'/Login', '/Login', Record<never, never>, Record<never, never>>,
    'messages': RouteRecordInfo<'messages', '/messages', Record<never, never>, Record<never, never>>,
    'profile': RouteRecordInfo<'profile', '/Profile', Record<never, never>, Record<never, never>>,
    '/Register': RouteRecordInfo<'/Register', '/Register', Record<never, never>, Record<never, never>>,
    '/Reset': RouteRecordInfo<'/Reset', '/Reset', Record<never, never>, Record<never, never>>,
    '/ResetEmailSent': RouteRecordInfo<'/ResetEmailSent', '/ResetEmailSent', Record<never, never>, Record<never, never>>,
    '/ResetPassword/[token]': RouteRecordInfo<'/ResetPassword/[token]', '/ResetPassword/:token', { token: ParamValue<true> }, { token: ParamValue<false> }>,
    '/ResetPassword/success': RouteRecordInfo<'/ResetPassword/success', '/ResetPassword/success', Record<never, never>, Record<never, never>>,
    'Settings': RouteRecordInfo<'Settings', '/settings', Record<never, never>, Record<never, never>>,
    '/user/[id]': RouteRecordInfo<'/user/[id]', '/user/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/VerifyEmail/[token]': RouteRecordInfo<'/VerifyEmail/[token]', '/VerifyEmail/:token', { token: ParamValue<true> }, { token: ParamValue<false> }>,
  }
}

declare module '@vue-router' {
  import type { RouteNamedMap } from '@vue-router/routes'

  export type RouterTyped = _RouterTyped<RouteNamedMap>

  /**
   * Type safe version of `RouteLocationNormalized` (the type of `to` and `from` in navigation guards).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalized<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationNormalizedLoaded` (the return type of `useRoute()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalizedLoaded<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationResolved` (the returned route of `router.resolve()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationResolved<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationResolvedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocation` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocation<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationTypedList<RouteNamedMap>[Name]

  /**
   * Generate a type safe params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParams<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['params']
  /**
   * Generate a type safe raw params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParamsRaw<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['paramsRaw']

  export function useRouter(): RouterTyped
  export function useRoute<Name extends keyof RouteNamedMap = keyof RouteNamedMap>(name?: Name): RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  export const useLink: UseLinkFnTyped<RouteNamedMap>

  export function onBeforeRouteLeave(guard: NavigationGuard<RouteNamedMap>): void
  export function onBeforeRouteUpdate(guard: NavigationGuard<RouteNamedMap>): void
}

declare module 'vue-router' {
  import type { RouteNamedMap } from '@vue-router/routes'

  export interface TypesConfig {
    beforeRouteUpdate: NavigationGuard<RouteNamedMap>
    beforeRouteLeave: NavigationGuard<RouteNamedMap>

    $route: RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[keyof RouteNamedMap]
    $router: _RouterTyped<RouteNamedMap>

    RouterLink: RouterLinkTyped<RouteNamedMap>
  }
}

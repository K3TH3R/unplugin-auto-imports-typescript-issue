/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// Generated by unplugin-auto-import
export {}
declare global {
  const Cartesian2: typeof import('cesium')['Cartesian2']
  const Cartesian3: typeof import('cesium')['Cartesian3']
  const Color: typeof import('cesium')['Color']
}
// for type re-export
declare global {
  // @ts-ignore
  export type { Cartesian2 as TCartesian2 } from 'cesium'
  import('cesium')
}
// for vue template auto import
import { UnwrapRef } from 'vue'
declare module 'vue' {
  interface ComponentCustomProperties {
    readonly Cartesian2: UnwrapRef<typeof import('cesium')['Cartesian2']>
    readonly Cartesian3: UnwrapRef<typeof import('cesium')['Cartesian3']>
    readonly Color: UnwrapRef<typeof import('cesium')['Color']>
  }
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    readonly Cartesian2: UnwrapRef<typeof import('cesium')['Cartesian2']>
    readonly Cartesian3: UnwrapRef<typeof import('cesium')['Cartesian3']>
    readonly Color: UnwrapRef<typeof import('cesium')['Color']>
  }
}

import { Cartesian4, Cartographic } from 'cesium'
import type { Cartographic as TCartographic } from 'cesium'

export function mylib() {
	return new Cartesian2(0, 0)
}

/**
 * This will not build due to a type error
 * - Return type of exported function has or is using private name 'TCartesian2'.ts(4060)
 */
// export function mylib2(): TCartesian2 {
// 	return new Cartesian2(0, 0)
// }

export function mylib3(): TCartographic {
	return new Cartographic(0, 0, 0)
}

/**
 * This will not build due to two type errors:
 * - Return type of exported function has or is using private name 'Cartesian3'.ts(4060)
 * - 'Cartesian3' cannot be used as a value because it was exported using 'export type'.ts(1362)
 */
// export function mylib4(): Cartesian3 {
// 	return new Cartesian3(0, 0, 0)
// }

/**
 * This will not build due to two type errors:
 * - 'Color' refers to a value, but is being used as a type here. Did you mean 'typeof Color'?ts(2749)
 * - Return type of exported function has or is using private name 'Color'.ts(4060)
 */
// export function mylib6(): Color {
// 	return new Color(0, 0, 0, 0)
// }

export function mylib5(): Cartesian4 {
	return new Cartesian4(0, 0, 0, 0)
}

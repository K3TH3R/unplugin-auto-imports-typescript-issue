// This function will build fine
export function mylib() {
	return new Cartesian2(0, 0)
}

// This will not build due to a type error
//  - Return type of exported function has or is using private name 'TCartesian2'.ts(4060)
// export function mylib2(): TCartesian2 {
// 	return new Cartesian2(0, 0)
// }

// This will not build due to two type errors:
// - Return type of exported function has or is using private name 'Cartesian3'.ts(4060)
// - 'Cartesian3' cannot be used as a value because it was exported using 'export type'.ts(1362)
// export function mylib3(): Cartesian3 {
// 	return new Cartesian3(0, 0, 0)
// }

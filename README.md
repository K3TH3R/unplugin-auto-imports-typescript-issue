# Unplugin Auto Imports Typescript Issue

This is a quick demo of some various Typescript-related issues with Unplugin Auto Imports within an Nx Monorepo setup. This is a default, Vue/Vite-based scaffold from `npx create-nx-workspace@latest` with all dependencies up-to-date along with a `nx g @nx/js:lib mylib --directory libs`.

To demonstrate the Type issues:
1. Clone the repo: `git clone git@github.com:K3TH3R/unplugin-auto-imports-typescript-issue.git`
2. Install deps: `yarn install`
3. Open up the file `libs/mylib/src/lib/mylib.ts` and `libs/mylib/vite.config.ts`
4. In it's default state, running `yarn build` will run the Nx build commands using the `libs/mylib/vite.config.ts` file for the build. Everything works and builds fine.
5. If you uncomment either of the commented out functions, the build will break due to Type related errors.

## Where the Confusion Lies
In the `AutoImport()` within `libs/mylib/vite.config.ts`, I have two auto-imports from Cesium: `Cartesian2` and `Cartesian3` as well as a "type" import for both of these objects. In the case of `Cartesian2`, I'm renaming it to `TCartesian2` to avoid namespace clashes in the autoimports.

### Type Aliases

In the case of `Cartesian2`, you can see the global import of the function works fine for the `mylib()` default build, however the `TCartesian2` global type import (`mylib2()`) throws the following TypeScript error:
```
Return type of exported function has or is using private name 'TCartesian2'.ts(4060)
```
However, if I do this exact same type alias format (`mylib3()`) _without_ global autoimports, it works fine.


### Type Clashes
In the case of a straight global import of both the function and the type, as shown with `Cartesian3`, I am seeing two TypeScript errors:
```
- Return type of exported function has or is using private name 'Cartesian3'.ts(4060)
- 'Cartesian3' cannot be used as a value because it was exported using 'export type'.ts(1362)
```
 And just to be super sure, I have a second version where I do a global import of the `Color` function with _no auto type import_ which also fails with the following errors: 
```
- 'Color' refers to a value, but is being used as a type here. Did you mean 'typeof Color'?ts(2749)
- Return type of exported function has or is using private name 'Color'.ts(4060)
```
However, I do the exact same format with `Cartesian4` below it without issue.

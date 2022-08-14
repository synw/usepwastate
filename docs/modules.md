[UsePwaState documentation](README.md) / Exports

# UsePwaState documentation

## Table of contents

### Functions

- [usePwaState](modules.md#usepwastate)

## Functions

### usePwaState

▸ **usePwaState**(): `Object`

The main use pwa composable

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `init` | () => `void` | Initialize the pwa: run this as soon as possible |
| `install` | (`event?`: `Event`) => `Promise`<`boolean`\> | Trigger the pwa install prompt |
| `isAppInstalled` | `WritableAtom`<``"false"`` \| ``"true"``\> | The reactive nanostore for the install state |

#### Defined in

composable.ts:4

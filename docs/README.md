UsePwaState documentation / [Exports](modules.md)

# Use Pwa

[![package](https://img.shields.io/npm/v/usepwa)](https://www.npmjs.com/package/usepwa)

A composable to manage a progressive web app's install state

## Install

```
npm install usepwa
# or
yarn add usepwa
```

[Api doc](docs/modules.md#usepwa)

## Usage

### Initialize

In your app state:

```typescript
import usePwa from "usepwa";

const pwa = usePwa();

function initState() {
  pwa.init();
}
```

Run the `init` function as soon as possible: this will trigger the event listeners
relative to the app installed state

### Listen for changes

A ``isAppInstalled`` persistent [nanostore](https://github.com/nanostores/persistent) atom is 
available to watch the state changes

```typescript
function initState() {
  pwa.init();
  const isTouchDevice = 'ontouchstart' in document.documentElement;
  if (isTouchDevice) {
    // the starting state, stored in localstorage from previous sessions
    let isAppInstalled = pwa.isAppInstalled.get() === "true";
    // listen for changes
    pwa.isAppInstalled.listen((v) => {
      isAppInstalled = v === "true";
      // ...
    })
  }
}
```

### Trigger the pwa install prompt

After running `init` it is possible to trigger the app install prompt
if you detect that the app is not installed:

```typescript
const hasUserAcceptedToInstall = await pwa.install()
```

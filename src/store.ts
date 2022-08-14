import { persistentAtom } from '@nanostores/persistent'


const isAppInstalledStore = persistentAtom<"true" | "false">("isPwaInstalled", "true");

export { isAppInstalledStore }
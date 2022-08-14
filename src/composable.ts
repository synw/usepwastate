import { isAppInstalledStore } from "./store";

/** The main use pwa composable */
const usePwaState = () => {
  let deferredPrompt: any;

  /** Initialize the pwa: run this as soon as possible */
  const init = () => {
    if (window.matchMedia('(display-mode: standalone)').matches) {
      isAppInstalledStore.set("true")
    } else {
      window.addEventListener('beforeinstallprompt', async (e) => {
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = e;
        isAppInstalledStore.set("false")
      });
      window.addEventListener('appinstalled', (event) => {
        isAppInstalledStore.set("true")
      });
    }
  }

  /** Trigger the pwa install prompt */
  const install = async (event?: Event): Promise<boolean> => {
    if (!deferredPrompt) {
      throw new Error("No deffered prompt in install PWA")
    }
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;
    return outcome == "accepted"
  }

  return {
    init,
    install,
    /** The reactive nanostore for the install state */
    isAppInstalled: isAppInstalledStore,
  }
}

export default usePwaState
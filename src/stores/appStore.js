// appStore.js
import { create } from 'zustand'

const useAppStore = create((set) => ({
  deferredPrompt: null,
  setDeferredPrompt: (event) => set({ deferredPrompt: event }),
}));

export default useAppStore;
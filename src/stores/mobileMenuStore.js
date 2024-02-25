// mobileMenuStore.js
import { create } from "zustand";

const useMobileMenuStore = create((set) => ({
  isMobileMenuOpen: false,
  setMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),
}));

export default useMobileMenuStore;

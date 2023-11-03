// mobileMenuStore.js
import { create } from 'zustand'

const useMobileMenuStore = create((set) => ({
  open: false,
  pageNum: 1,
  setOpen: (isOpen) => set({ open: isOpen }),
  setPageNum: (page) => set({ pageNum: page }),
}));

export default useMobileMenuStore;
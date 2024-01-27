import { create } from 'zustand'

const useBookNowStore = create((set) => ({
  show: false,
  onOpen: () => set(() => ({ show: true})),
  onClose: () => set({ show: false }),
}))

export default useBookNowStore
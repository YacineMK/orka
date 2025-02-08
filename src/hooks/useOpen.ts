import { openStoreType } from "@/types/hooks";
import { create } from "zustand";

export const useOpen = create<openStoreType>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

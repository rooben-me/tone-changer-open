import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MagicBackgroundState {
  isBackgroundVisible: boolean;
  toggleBackground: () => void;
}

const useMagicBackgroundStore = create(
  persist<MagicBackgroundState>(
    (set) => ({
      isBackgroundVisible: false,
      toggleBackground: () =>
        set((state) => ({ isBackgroundVisible: !state.isBackgroundVisible })),
    }),
    {
      name: "magic-background-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useMagicBackgroundStore;

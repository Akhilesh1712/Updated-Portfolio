import { create } from "zustand";

type PortfolioState = {
  introComplete: boolean;
  activeProjectId: string | null;
  setIntroComplete: (complete: boolean) => void;
  setActiveProjectId: (id: string | null) => void;
};

export const usePortfolioStore = create<PortfolioState>((set) => ({
  introComplete: false,
  activeProjectId: null,
  setIntroComplete: (introComplete) => set({ introComplete }),
  setActiveProjectId: (activeProjectId) => set({ activeProjectId }),
}));


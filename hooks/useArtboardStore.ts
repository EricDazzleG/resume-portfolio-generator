import { create } from "zustand";

// TODO: Replace with your actual ResumeData type
// import type { ResumeData } from "@/types";
type ResumeData = any;

type ArtboardStore = {
  resume: ResumeData;
  setResume: (resume: ResumeData) => void;
};

export const useArtboardStore = create<ArtboardStore>()((set) => ({
  resume: null as unknown as ResumeData,
  setResume: (resume) => {
    set({ resume });
  },
})); 
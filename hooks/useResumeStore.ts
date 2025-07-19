import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { temporal } from "zundo";
import _set from "lodash.set";

// TODO: Replace with your actual ResumeDto type
// import type { ResumeDto } from "@/types";
type ResumeDto = any;

type ResumeStore = {
  resume: ResumeDto;
  setValue: (path: string, value: unknown) => void;
  addSection: () => void;
  removeSection: (sectionId: string) => void;
};

export const useResumeStore = create<ResumeStore>()(
  temporal(
    immer((set) => ({
      resume: {} as ResumeDto,
      setValue: (path, value) => {
        set((state) => {
          _set(state.resume, path, value);
        });
      },
      addSection: () => {
        // Stub: Add your section logic here
      },
      removeSection: (sectionId) => {
        // Stub: Add your remove logic here
      },
    })),
    {
      limit: 100,
      wrapTemporal: (fn) => devtools(fn),
      partialize: ({ resume }) => ({ resume }),
    },
  ),
);

export const useTemporalResumeStore = <T>(
  selector: (state: any) => T,
  equality?: (a: T, b: T) => boolean,
) => useResumeStore.temporal(selector, equality); 
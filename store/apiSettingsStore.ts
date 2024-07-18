import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ApiSettingsState {
  apiKey: string;
  apiUrl: string;
  setApiKey: (apiKey: string) => void;
  setApiUrl: (apiUrl: string) => void;
}

const useApiSettingsStore = create<ApiSettingsState>()(
  persist(
    (set) => ({
      apiKey: "",
      apiUrl: "https://api.groq.com/openai/v1/chat/completions",
      setApiKey: (apiKey: string) => set({ apiKey }),
      setApiUrl: (apiUrl: string) => set({ apiUrl }),
    }),
    {
      name: "api-settings-storage",
    }
  )
);

export default useApiSettingsStore;

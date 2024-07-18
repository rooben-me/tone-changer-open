import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ApiSettingsState {
  apiKey: string;
  apiUrl: string;
  modelName: string;
  setApiKey: (apiKey: string) => void;
  setApiUrl: (apiUrl: string) => void;
  setModelName: (modelName: string) => void;
}

const useApiSettingsStore = create<ApiSettingsState>()(
  persist(
    (set) => ({
      apiKey: "",
      apiUrl: "https://api.groq.com/openai/v1/chat/completions",
      modelName: "llama3-70b-8192",
      setApiKey: (apiKey: string) => set({ apiKey }),
      setApiUrl: (apiUrl: string) => set({ apiUrl }),
      setModelName: (modelName: string) => set({ modelName }),
    }),
    {
      name: "api-settings-storage",
    }
  )
);

export default useApiSettingsStore;

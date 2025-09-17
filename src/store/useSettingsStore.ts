import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface SettingsState {
  darkMode: boolean;
  toggleDarkMode: () => void;
  notifications: boolean;
  setNotifications: (value: boolean) => void;
  locationAccess: boolean;
  setLocationAccess: (value: boolean) => void;
  privacyMode: boolean;
  togglePrivacyMode: () => void;
  language: string;
  setLanguage: (lang: string) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      darkMode: false,
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
      notifications: false,
      setNotifications: (value) => set({ notifications: value }),
      locationAccess: false,
      setLocationAccess: (value) => set({ locationAccess: value }),
      privacyMode: false,
      togglePrivacyMode: () =>
        set((state) => ({ privacyMode: !state.privacyMode })),
      language: "English",
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: "settings-storage",
      storage: createJSONStorage(() => {
        if (typeof window !== "undefined") return localStorage;
        return {
          getItem: async () => null,
          setItem: async () => {},
          removeItem: async () => {},
        };
      }),
      partialize: (state) => ({
        darkMode: state.darkMode,
        notifications: state.notifications,
        locationAccess: state.locationAccess,
        privacyMode: state.privacyMode,
        language: state.language,
      }),
    }
  )
);

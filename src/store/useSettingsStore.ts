// Zustand store update
import { create } from "zustand";

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

export const useSettingsStore = create<SettingsState>((set) => ({
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
}));

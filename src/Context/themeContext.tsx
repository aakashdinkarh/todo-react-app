import React, { Dispatch, PropsWithChildren, SetStateAction, useLayoutEffect, useMemo, useState } from 'react';
import { createContext } from "react";
import { getDarkThemePreferenceFromLocalStorage } from '../utils/localStorageUtil';

export const ThemeContext = createContext<{
  isDarkThemeEnabled: boolean;
  setIsDarkThemeEnabled: Dispatch<SetStateAction<boolean>>
}>({
  isDarkThemeEnabled: true,
  setIsDarkThemeEnabled: () => {},
});

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(true);

  useLayoutEffect(() => {
    setIsDarkThemeEnabled(getDarkThemePreferenceFromLocalStorage());
  }, [])

  const contextValue = useMemo(() => ({
    isDarkThemeEnabled,
    setIsDarkThemeEnabled,
  }), [isDarkThemeEnabled]);

  console.log(contextValue);

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}

import React from 'react';
import { useCallback } from "react";
import { Switch } from "../Home.styled"
import { saveDarkThemePreferenceToLocalStorage } from "../../utils/localStorageUtil";
import { useThemeContext } from "../../hooks/useThemeContext";

export const DarkModeSwitch = () => {
    const { isDarkThemeEnabled, setIsDarkThemeEnabled } = useThemeContext();

    const changeDarkMode = useCallback(() => {
        setIsDarkThemeEnabled(!isDarkThemeEnabled);
        saveDarkThemePreferenceToLocalStorage(!isDarkThemeEnabled);
      }, [isDarkThemeEnabled, setIsDarkThemeEnabled]);

    return (
        <Switch isDarkThemeEnabled={isDarkThemeEnabled}>
            <input
                type="checkbox"
                checked={isDarkThemeEnabled}
                onChange={changeDarkMode}
            />
            <span className="slider"></span>
        </Switch>
    )
}

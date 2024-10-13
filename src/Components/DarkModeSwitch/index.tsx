import React, { useLayoutEffect, useState } from 'react';
import { useCallback } from "react";
import { Switch } from "../Home.styled"
import { getDarkThemePreferenceFromLocalStorage, saveDarkThemePreferenceToLocalStorage } from "../../utils/localStorageUtil";

export const DarkModeSwitch = () => {
    const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(true);

    useLayoutEffect(() => {
        setIsDarkThemeEnabled(getDarkThemePreferenceFromLocalStorage());
    }, [])

    const changeDarkMode = useCallback(() => {
        setIsDarkThemeEnabled(!isDarkThemeEnabled);
        saveDarkThemePreferenceToLocalStorage(!isDarkThemeEnabled);
      }, [isDarkThemeEnabled, setIsDarkThemeEnabled]);

    return (
        <Switch>
            <input
                type="checkbox"
                checked={isDarkThemeEnabled}
                onChange={changeDarkMode}
            />
            <span className="slider"></span>
        </Switch>
    )
}

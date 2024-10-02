import { useCallback } from "react";
import { Switch } from "../Home.styles"
import { saveDarkThemePreferenceToLocalStorage } from "../../utils/localStorageUtil";

export const DarkModeSwitch = ({ darkMode, setDarkMode }) => {
    const changeDarkMode = useCallback(() => {
        setDarkMode(!darkMode);
        saveDarkThemePreferenceToLocalStorage(!darkMode);
      }, [darkMode]);

    return (
        <Switch darkMode={darkMode}>
            <input
                type="checkbox"
                checked={darkMode}
                onChange={changeDarkMode}
            />
            <span className="slider"></span>
        </Switch>
    )
}

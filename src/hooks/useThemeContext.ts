import { useContext, useMemo } from "react"
import { ThemeContext } from "../Context/themeContext"

export const useThemeContext = () => {
  const { isDarkThemeEnabled, setIsDarkThemeEnabled } = useContext(ThemeContext);

  const contextValue = useMemo(() => ({
    isDarkThemeEnabled, setIsDarkThemeEnabled
  }), [isDarkThemeEnabled, setIsDarkThemeEnabled])

  return contextValue;
}
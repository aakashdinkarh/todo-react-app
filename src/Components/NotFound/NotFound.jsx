import { Link } from "react-router-dom";
import { Wrapper } from "../Home.styles";
import { useEffect, useState } from "react";
import { getDarkThemePreferenceFromLocalStorage } from "../../utils/localStorageUtil";

const NotFound = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(getDarkThemePreferenceFromLocalStorage());
  }, [])

  return (
    <Wrapper darkMode={darkMode}>
      <h1>Page Not Found</h1>
      <p>
        <Link to="/">Go to Homepage</Link>
      </p>
    </Wrapper>
  );
};

export default NotFound;

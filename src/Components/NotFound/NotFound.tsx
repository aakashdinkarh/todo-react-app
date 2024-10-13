
import React from 'react';
import { Link } from "react-router-dom";
import { Wrapper } from "../Home.styled";
import { useLayoutEffect } from "react";
import { getDarkThemePreferenceFromLocalStorage } from "../../utils/localStorageUtil";
import { useThemeContext } from "../../hooks/useThemeContext";

const NotFound = () => {
  const { isDarkThemeEnabled, setIsDarkThemeEnabled } = useThemeContext();

  useLayoutEffect(() => {
    setIsDarkThemeEnabled(getDarkThemePreferenceFromLocalStorage());
  }, []);

  return (
    <Wrapper isDarkThemeEnabled={isDarkThemeEnabled}>
      <h1>Page Not Found</h1>
      <p>
        <Link to="/">Go to Homepage</Link>
      </p>
    </Wrapper>
  );
};

export default NotFound;

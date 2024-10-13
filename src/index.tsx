import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Home from "./Components/Home";
import NotFound from "./Components/NotFound/NotFound";
import SingleToDo from "./Components/SingleToDo/SingleToDo";

//styled-components
import GlobalStyles from "./Global.Styles";
import { ThemeContextProvider } from "./Context/themeContext";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.NODE_ENV === 'development' ? '/' : process.env.PUBLIC_URL}>
      <GlobalStyles />
      <ThemeContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo/:id" element={<SingleToDo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

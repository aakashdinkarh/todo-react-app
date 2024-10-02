import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Home from "./Components/Home";
import NotFound from "./Components/NotFound/NotFound";
import SingleToDo from "./Components/SingleToDo/SingleToDo";

//styled-components
import GlobalStyles from "./Global.Styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo/:id" element={<SingleToDo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

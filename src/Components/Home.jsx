import { useState, useEffect } from "react";
import {
  Wrapper,
  TopContent,
  Input,
} from "./Home.styles";

import { Spinner } from "./Spinner/Spinner.styles";
import { ToDoList } from "./ToDoList";
import { getDarkThemePreferenceFromLocalStorage, getTodosFromLocalStorage } from "../utils/localStorageUtil";
import { AddToDo } from "./AddToDo";
import { DarkModeSwitch } from "./DarkModeSwitch";

// let i = 0;

//search input
const SearchForm = ({ searchTerm, setSearchTerm }) => (
  <Input
    type="search"
    placeholder="Search Task"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
);

const Home = () => {
  const [todos, setToDos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //initial render
  useEffect(() => {
    setIsLoading(true);
    setToDos(getTodosFromLocalStorage());
    setDarkMode(getDarkThemePreferenceFromLocalStorage());
    setIsLoading(false);
  }, []);

  return (
    <Wrapper darkMode={darkMode}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <TopContent>
            <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />

            <AddToDo
              darkMode={darkMode}
              setToDos={setToDos}
            />

            <SearchForm
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              darkMode={darkMode}
            />
          </TopContent>

          <ToDoList
            todos={todos}
            setToDos={setToDos}
            searchTerm={searchTerm}
            darkMode={darkMode}
          />
        </>
      )}
    </Wrapper>
  );
};

export default Home;

import React from 'react';
import { useState, useEffect } from "react";
import {
  Wrapper,
  TopContent,
  Input,
  Divider,
} from "./Home.styled";

import { Spinner } from "./Spinner/Spinner.styled";
import { ToDoList } from "./ToDoList";
import { getTodosFromLocalStorage } from "../utils/localStorageUtil";
import { AddToDo } from "./AddToDo";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { TSearchForm, TTodos } from './types';

// let i = 0;

//search input
const SearchForm = ({ searchTerm, setSearchTerm }: TSearchForm) => (
  <Input
    type="search"
    placeholder="Search Task"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
);

const Home = () => {
  const [todos, setToDos] = useState<TTodos>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //initial render
  useEffect(() => {
    setIsLoading(true);
    setToDos(getTodosFromLocalStorage());
    setIsLoading(false);
  }, []);

  return (
    <Wrapper>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <TopContent>
            <DarkModeSwitch />

            <AddToDo setToDos={setToDos} />

            <SearchForm
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </TopContent>

          <Divider />

          <ToDoList
            todos={todos}
            setToDos={setToDos}
            searchTerm={searchTerm}
          />
        </>
      )}
    </Wrapper>
  );
};

export default Home;

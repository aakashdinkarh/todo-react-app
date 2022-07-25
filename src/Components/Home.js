import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  TopContent,
  Input,
  TodosList,
  Button,
  Switch,
} from "./Home.styles";

import { Spinner } from "./Spinner/Spinner.styles";

// let i = 0;

//Add todo
const AddToDo = ({ newToDo, setNewToDo, addToDo, darkMode }) => (
  <div>
    <Input
      onChange={(e) => setNewToDo(e.target.value)}
      value={newToDo}
      placeholder="New Task..."
      type="text"
    />
    {/* add new todo */}
    <Button darkMode={darkMode} onClick={addToDo}>
      Add Task
    </Button>
  </div>
);

//search input
const SearchForm = ({ searchTerm, setSearchTerm }) => (
  <Input
    type="search"
    placeholder="Search Task"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
);

//show Todo List
const ToDoList = ({
  searchTerm,
  todos,
  toggleCheck,
  deleteToDo,
  darkMode,
  handleEdit,
}) => {
  let results = <p>All todos...</p>;
  let toDoList = "";
  if (searchTerm === "") {
    toDoList = todos.map((todo, ind) => {
      return (
        <p key={ind}>
          <i>{ind + 1}. </i>
          <label className={todo.checked ? "checked" : ""}>
            <Input
              type="checkbox"
              checked={todo.checked}
              onChange={() => toggleCheck(todo)}
            />
          </label>
          <Link to={`todo/${todo.id}`}>{todo.text}</Link>
          <Button
            className="editBtn"
            darkMode={darkMode}
            onClick={() => handleEdit(todo)}
          >
            &#128393;
          </Button>
          <Button
            className="delBtn"
            darkMode={darkMode}
            onClick={() => deleteToDo(todo.id)}
          >
            &times;
          </Button>
        </p>
      );
    });
  } else {
    results = <p>Showing search results...</p>;
    toDoList = todos.map((todo, ind) => {
      if (todo.text.includes(searchTerm)) {
        return (
          <p key={ind}>
            <i>{ind + 1}. </i>
            <label className={todo.checked ? "checked" : ""}>
              <Input
                type="checkbox"
                checked={todo.checked}
                onChange={() => toggleCheck(todo)}
              />
            </label>
            <Link to={`todo/${todo.id}`}>{todo.text}</Link>
            <Button
              className="editBtn"
              darkMode={darkMode}
              onClick={() => handleEdit(todo)}
            >
              &#128393;
            </Button>
            <Button
              className="delBtn"
              darkMode={darkMode}
              onClick={() => deleteToDo(todo.id)}
            >
              &times;
            </Button>
          </p>
        );
      } else {
        return "";
      }
    });
  }
  // console.log(toDoList);
  if (toDoList.every((elem) => elem === "") || toDoList.length === 0) {
    toDoList = <p>No todos to show</p>;
  }
  return (
    <TodosList darkMode={darkMode}>
      {results}
      {toDoList}
    </TodosList>
  );
};

const Home = () => {
  const [todos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const url = "http://127.0.0.1:3001/todo";

  //initial render
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((resp) => resp.data)
      .then((data) => {
        setToDos(data);
        setIsLoading(false);
      });
    if (localStorage.getItem("darkMode")) {
      setDarkMode(JSON.parse(localStorage.getItem("darkMode")));
    } else {
      localStorage.setItem("darkMode", JSON.stringify(false));
    }
  }, []);

  //add to do function
  async function addToDo() {
    if (newToDo === "") {
      return;
    }
    const id = await axios.post(url, { text: newToDo, checked: false });
    console.log(id.data);
    setToDos([...todos, { id: id.data, text: newToDo, checked: false }]);
    setNewToDo("");
  }
  //edit todo
  const handleEdit = (todo) => {
    const editedText = prompt("Edit task", todo.text);
    if (editedText === null) {
      return;
    }
    const newTodos = todos.map((elem) => {
      if (elem.id !== todo.id) return elem;
      else return { id: elem.id, text: editedText, checked: elem.checked };
    });
    setToDos(newTodos);
    axios.put(url, { id: todo.id, newText: editedText, checked: todo.checked });
  };
  //toggle check function
  function toggleCheck(checkToDo) {
    const newToDos = todos.map((todo) => {
      if (todo.id !== checkToDo.id) {
        return todo;
      } else {
        axios.put(`${url}/check`, {
          id: todo.id,
          newCheck: !todo.checked,
        });
        return { id: todo.id, text: todo.text, checked: !todo.checked };
      }
    });
    setToDos(newToDos);
  }
  //delete todo function
  function deleteToDo(delID) {
    const newToDos = todos.filter((todo) => todo.id !== delID);
    setToDos(newToDos);
    console.log(delID, "delID");
    axios.delete(`${url}?id=${delID}`).then((res) => console.log(res));
  }
  //change dark Mode
  const changeDarkMode = () => {
    const prevDarkMode = darkMode;
    setDarkMode(!prevDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(!prevDarkMode));
  };
  return (
    <Wrapper darkMode={darkMode}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {/* Top Content */}
          <TopContent>
            {/* Dark Mode Switch */}
            <Switch darkMode={darkMode}>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={changeDarkMode}
              />
              <span className="slider"></span>
            </Switch>
            {/* input from user */}
            <AddToDo
              newToDo={newToDo}
              setNewToDo={setNewToDo}
              addToDo={addToDo}
              darkMode={darkMode}
            />

            <SearchForm
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              darkMode={darkMode}
            />
          </TopContent>
          {/* List to do items */}
          <ToDoList
            searchTerm={searchTerm}
            todos={todos}
            toggleCheck={toggleCheck}
            deleteToDo={deleteToDo}
            darkMode={darkMode}
            handleEdit={handleEdit}
          />
        </>
      )}
    </Wrapper>
  );
};

export default Home;

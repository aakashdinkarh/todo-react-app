import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { Wrapper, Switch, TopContent } from "../Home.styles";
import { Spinner } from "../Spinner/Spinner.styles";

const styles = {
  "big-todo": {
    fontSize: "larger",
  },
  bold: {
    fontWeight: "bold",
  },
};

const NoTodo = () => (
  <>
    <h1>No Todo found with this id.</h1>
    <Link to="/">Go to Homepage</Link>
  </>
);

const SingleToDo = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [todo, setTodo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (localStorage.getItem("darkMode")) {
      setDarkMode(JSON.parse(localStorage.getItem("darkMode")));
    } else {
      localStorage.setItem("darkMode", JSON.stringify(false));
    }
    const getSingleTodo = async () => {
      const endpoint = await axios.get(`http://127.0.0.1:3001/todo/${id}`);
      setTodo(endpoint.data);
      setIsLoading(false);
    };
    setIsLoading(true);
    getSingleTodo();
  }, [id]);

  // change dark Mode
  const changeDarkMode = () => {
    const prevDarkMode = darkMode;
    setDarkMode(!prevDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(!prevDarkMode));
  };

  if (todo) {
    return (
      <Wrapper darkMode={darkMode}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <TopContent>
              <Switch darkMode={darkMode}>
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={changeDarkMode}
                />
                <span className="slider"></span>
              </Switch>
            </TopContent>
            <div style={styles["big-todo"]}>
              <p style={styles.bold}>
                {" "}
                Status: {todo.checked ? "Done" : "Not-done"}
              </p>
              Description: {todo.text}
            </div>
          </>
        )}
      </Wrapper>
    );
  } else {
    return <NoTodo />;
  }
};

export default SingleToDo;

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { Wrapper, TopContent } from "../Home.styles";
import { Spinner } from "../Spinner/Spinner.styles";
import { getDarkThemePreferenceFromLocalStorage, getSingleTodo } from "../../utils/localStorageUtil";
import { DarkModeSwitch } from "../DarkModeSwitch";

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
  const [todo, setTodo] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);

    setDarkMode(getDarkThemePreferenceFromLocalStorage());
    setTodo(getSingleTodo(id));

    // const getSingleTodo = async () => {
    //   const endpoint = await axios.get(`http://127.0.0.1:3001/todo/${id}`);
    // };
    // getSingleTodo();
    setIsLoading(false);
  }, [id]);

  if (!todo) {
    return <NoTodo />;
  }

  return (
    <Wrapper darkMode={darkMode}>
      <p style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <Link to="/"><b>Home</b></Link> / todo
        </div>
        <TopContent>
          <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
        </TopContent>
      </p>
      {isLoading ? (
        <Spinner />
      ) : (
        <div style={styles["big-todo"]}>
          <p style={styles.bold}>
            {" "}
            Status: {todo.checked ? "Done" : "Not-done"}
          </p>
          Description: {todo.text}
        </div>
      )}
    </Wrapper>
  );
};

export default SingleToDo;

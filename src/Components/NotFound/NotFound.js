import { Link } from "react-router-dom";
import { Wrapper } from "../Home.styles";

const NotFound = () => {
  let darkMode;
  if (localStorage.getItem("darkMode")) {
    darkMode = JSON.parse(localStorage.getItem("darkMode"));
  }

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

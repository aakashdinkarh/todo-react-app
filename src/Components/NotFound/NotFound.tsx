
import React from 'react';
import { Link } from "react-router-dom";
import { Wrapper } from "../Home.styled";

const NotFound = () => {
  return (
    <Wrapper>
      <h1>Page Not Found</h1>
      <p>
        <Link to="/">Go to Homepage</Link>
      </p>
    </Wrapper>
  );
};

export default NotFound;

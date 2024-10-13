import styled from "styled-components";

//Wrapper
export const Wrapper = styled.div`
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 10px;
  height: 100%;
  overflow: auto;
  min-width: 300px;

  a {
    color: var(--text-color);
  }
`;

export const TopContent = styled.div`
  position: relative;
  > div, form {
    display: flex;
  }
  > input {
    margin-top: 10px;
  }
  input[type="search"] {
    width: 50%;
    max-width: 305px;
  }

  @media screen and (max-width: 400px) {
    > div > form {
      flex-direction: column;
      align-items: flex-start;

      button {
        margin: 10px 0;
        padding: 8px;
      }
    }
    > input {
      margin: 0;
    }
    input[type="search"] {
      width: auto;
    }
  }
`;

//Input Element
export const Input = styled.input`
  border: none;
  border-radius: 3px;
  padding: 5px;
  :focus {
    outline: none;
  }
  font-size: var(--fontSmall);
  [type="search"] {
    width: 50%;
    /* max-width: 300px; */
  }
`;

//Normal Button
export const Button = styled.button`
  border: none;
  margin-left: 10px;
  border-radius: 3px;
  font-size: var(--fontMed);
  background-color: var(--accent-color);
  color: var(--bg-color);
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }

  > svg {
    fill: var(--bg-color);
  }
`;

export const Divider = styled.hr`
  border: 1px solid var(--accent-color);
`;

//Todo List
export const TodosList = styled.div`
  margin-top: 10px;
  font-size: var(--fontMed);
  background-color: var(--bg-color);
  color: var(--text-color);
  input {
    width: 17px;
    height: 17px;
    accent-color: var(--accent-color);
  }
  .checked + a {
    text-decoration: line-through;
  }
  a {
    text-decoration: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(100% - 80px);
  }
  p {
    position: relative;
    padding-right: 25px;
    display: flex;
    align-items: center;
  }
  button {
    width: 25px;
    height: 25px;
  }
  .delBtn {
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--secondary-color);
  }
  .editBtn {
    position: absolute;
    top: 0;
    right: 30px;
    padding: 2px;
  }
`;

//Swtich
export const Switch = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  width: 50px;
  height: 30px;
  input {
    display: none;
  }
  .slider {
    display: inline-block;
    height: 100%;
    width: 100%;
    cursor: pointer;
    border-radius: 34px;
    background-color: var(--dark-bg-color);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    border-radius: 50%;
    left: 5px;
    bottom: 4px;
    background-color: var(--bg-color);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: var(--light-bg-color);
  }
  input:checked + .slider:before {
    transform: translateX(80%);
  }
`;

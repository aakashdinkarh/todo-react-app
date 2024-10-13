import styled from "styled-components";

//Wrapper
export const Wrapper = styled.div<{isDarkThemeEnabled: boolean }>`
  background-color: ${({ isDarkThemeEnabled }) =>
    isDarkThemeEnabled ? "var(--lightCoffee)" : "var(--dustyRose)"};
  padding: 10px;
  height: 100%;
  overflow: auto;
  min-width: 300px;
`;

export const TopContent = styled.div`
  position: relative;
  > div {
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
    > div {
      flex-direction: column;
      align-items: flex-start;
      button {
        margin: 10px 0;
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
export const Button = styled.button<{isDarkThemeEnabled: boolean }>`
  border: none;
  margin-left: 10px;
  border-radius: 3px;
  font-size: var(--fontMed);
  background-color: ${({ isDarkThemeEnabled }) =>
    isDarkThemeEnabled ? "var(--darkCoffee)" : "var(--roseWater)"};
  cursor: pointer;
  opacity: ${({ isDarkThemeEnabled }) => (isDarkThemeEnabled ? "1" : "0.8")};
  :hover {
    opacity: ${({ isDarkThemeEnabled }) => (isDarkThemeEnabled ? "0.7" : "1")};
  }
`;

//Todo List
export const TodosList = styled.div<{isDarkThemeEnabled: boolean }>`
  padding: 10px;
  margin-top: 10px;
  border: 1px solid
    ${({ isDarkThemeEnabled }) => (isDarkThemeEnabled ? "var(--darkCoffee)" : "var(--roseWater)")};
  font-size: var(--fontMed);
  label {
    margin: 10px 0;
  }
  input {
    width: 17px;
    height: 17px;
    accent-color: ${({ isDarkThemeEnabled }) =>
      isDarkThemeEnabled ? "var(--darkCoffee)" : "var(--roseWater)"};
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
  }
  button {
    width: 25px;
    height: 25px;
  }
  .delBtn {
    position: absolute;
    top: 0;
    right: 0;
  }
  .editBtn {
    position: absolute;
    top: 0;
    right: 30px;
    padding: 2px;
  }
`;

//Swtich
export const Switch = styled.label<{isDarkThemeEnabled: boolean }>`
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
    background-color: ${({ isDarkThemeEnabled }) =>
      isDarkThemeEnabled ? "var(--roseWater)" : "var(--darkCoffee)"};
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
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: var(--roseWater);
  }
  input:checked + .slider:before {
    transform: translateX(80%);
  }
`;

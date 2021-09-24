import React from "react";
import { ThemeContext } from "../Contexts/themeContext";
import styled from "styled-components";
import { Form } from "./form";

const Navbar = styled.div`
  width: 100%;
  height: 100px;
  margin: 10px auto;
  background: ${(props) => (props.theme === "light" ? "black" : "aquamarine")};
`;

const Button = styled.button`
  width: 100px;
  height: 80px;
  border: none;
  border-radius: 10px;
  background: #4c00ff;
  &:hover {
    background: green;
  }
`;

const Theme = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div>
      <Navbar theme={theme}></Navbar>
      <Button onClick={(e) => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </Button>
      <Form theme={theme} />
    </div>
  );
};

export { Theme };
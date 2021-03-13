import React from "react";
import { Navbar } from "react-bootstrap";

export const Menu = () => {
  return (
    <Navbar style={{marginBottom:"2rem"}}bg="dark" variant="dark">
      <Navbar.Brand >Giphy with React</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Made by: <a href="https://bitbucket.org/JuanMa_/">Juan Manuel</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

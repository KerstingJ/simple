import React from "react";
import styled from "styled-components";
import { NavLink, withRouter } from "react-router-dom";

import { theme } from "../config";

export default withRouter(function(props) {
  const pushHome = event => {
    console.log(props.history.push("/"));
  };

  return (
    <Header>
      <div className="container">
        <h1 onClick={pushHome}>Simple</h1>
        {props.search && (
          <input type="search" placeholder="🔎 Search Tags..." />
        )}
        {props.nav && (
          <nav>
            <NavLink to="/">
              <i className="fas fa-user" />
            </NavLink>
            <NavLink to="/addProject">
              <i className="fas fa-plus" />
            </NavLink>
          </nav>
        )}
      </div>
    </Header>
  );
});

const Header = styled.header`
  height: 55px;
  width: 100%;
  background: #4abdac;
  color: white;
  box-shadow: 0 0 2px black;

  position: fixed;
  z-index: 2;

  .container {
    padding: 0 50px;
    max-width: 1000px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      padding: 10px 0;
      font-size: 2.4rem;
    }

    nav {
      height: 100%;
      display: flex;
      align-items: center;

      a {
        display: inline-block;
        font-size: 2rem;
        height: 100%;
        transition: 0.25s;
        border-bottom: 1px solid rgba(0, 0, 0, 0);

        margin-left: 25px;

        &:hover {
          text-decoration: none;
          border-bottom: 1px solid white;
        }
      }
    }
  }
`;

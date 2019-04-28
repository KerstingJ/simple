import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

export default withRouter(function ProjectCard(props) {
  let { project } = props;

  const navButton = event => {
    event.preventDefault();
    props.history.push(`/projects/${project.id}`);
  };

  return (
    <CardContainer>
      <img alt="default" className="cardImg" src={`../${project.images[0]}`} />
      <div className="info">
        <div className="head">
          <h4>Done For: {project.client}</h4>
          <p>{project.location}</p>
          <div className="rating">
            {[1, 2, 3, 4, 5].map(ech =>
              ech <= project.rating ? (
                <i key={ech} className="fas fa-star" />
              ) : (
                <i key={ech} className="far fa-star" />
              )
            )}
          </div>
        </div>
        <button className="more" onClick={navButton}>
          View Project
        </button>
      </div>
    </CardContainer>
  );
});

const CardContainer = styled.div`
  margin-left: 20px;
  margin-bottom: 20px;

  border: 1px solid #dfdce3;
  border-radius: 5px;
  background: #dfdce3;

  .cardImg {
    padding: 10px;
    max-width: 100%;
  }

  .info {
    padding: 15px;
    padding-top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    /* border-left: 3px solid #4abdac; */
  }

  .rating svg {
    margin: 3px;

    &:first-child {
      margin-left: 0;
    }

    path {
      fill: #f7b733;
    }
  }

  .more {
    background: #4abdac;
    color: white;
    border: 2px solid #41bdac;
    box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.3);

    transition: 0.35s;

    &:hover {
      background: white;
      color: #4abdac;
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.3);
    }
  }
`;

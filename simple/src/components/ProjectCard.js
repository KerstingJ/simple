import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

import CardCarousel from "./CardCarousel";

export default withRouter(function ProjectCard(props) {
  let { project } = props;
  const [hasVoted, setHasVoted] = useState(0);

  const voteUp = event => {
    event.preventDefault();
    setHasVoted(hasVoted > 0 ? 0 : 1);
  };

  const voteDown = event => {
    event.preventDefault();
    setHasVoted(hasVoted < 0 ? 0 : -1);
  };

  const navButton = event => {
    event.preventDefault();
    props.history.push(`/projects/${project.id}`);
  };

  return (
    <CardContainer>
      {/* Voting for larger views */}
      <div className="voteBar tabletPlus">
        <div className="up" onClick={voteUp}>
          <i className="fas fa-chevron-up up" />
        </div>
        <p className={hasVoted > 0 ? "plus" : hasVoted < 0 ? "minus" : ""}>
          {project.votes + hasVoted}
        </p>
        <div className="down" onClick={voteDown}>
          <i className="fas fa-chevron-down down" />
        </div>
      </div>

      {/* main container */}
      <div className="infoContainer">

        <CardCarousel images={project.images} />

        {/* Voting for mobile views */}
        <div className="voteBar mobile">
          <div className="up" onClick={voteUp}>
            <i className="fas fa-chevron-up up" />
          </div>
          <p className={hasVoted > 0 ? "plus" : hasVoted < 0 ? "minus" : ""}>
            {project.votes + hasVoted}
          </p>
          <div className="down" onClick={voteDown}>
            <i className="fas fa-chevron-down down" />
          </div>
        </div>

        {/* Contractor Info */}
        <div className="info">
          <div className="head">
            <Link to={`/contractors/${project.contractor_id}`}>
              <h3>{project.contractor}</h3>
            </Link>
            <h4>Work For: {project.client}</h4>
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
          <p className="tags">
            {project &&
              project.tags.map(tag => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
          </p>
          <button className="more" onClick={navButton}>
            View Project
          </button>
        </div>
      </div>
    </CardContainer>
  );
});

const CardContainer = styled.div`
  display: flex;
  align-items: center;

  margin: 15px 15px 15px 0;
  width: 100%;
  max-width: 800px;

  position: relative;
  left: -10px;

  @media (max-width: 750px) {
    left: unset;
  }

  @media (max-width: 500px) {
    margin: 15px;
  }

  .tags {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-left: -5px;

    .tag {
      margin: 3px 5px;
      padding: 0 7px 2px 7px;
      border-radius: 3px;
      border-bottom: 2px solid grey;
      border-right: 2px solid grey;
      font-size: 1.3rem;

      background: #dfdce3;
    }
  }

  .voteBar {
    text-align: center;
    padding: 20px;

    &.tabletPlus {
      @media (max-width: 500px) {
        display: none;
      }
    }

    &.mobile {
      display: none;
      @media (max-width: 500px) {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 10px 10px 0;
      }
    }

    svg {
      width: 4rem;
      height: 4rem;

      &.up path:hover {
        transition: 0.2s;
        fill: #4abdac;
      }

      &.down path:hover {
        transition: 0.2s;
        fill: #fc4a1a;
      }
    }

    p {
      font-size: 2rem;
    }

    .plus {
      color: #4abdac;
    }

    .minus {
      color: #fc4a1a;
    }
  }

  .infoContainer {
    display: flex;
    max-height: 333px;
    height: 100%;
    width: 100%;
    overflow: hidden;

    /* border: 1px solid black; */
    border-radius: 6px;
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);

    @media (max-width: 750px) {
      flex-direction: column;
      max-height: unset;
      overflow: unset;
    }
  }

  .info {
    padding: 15px;
    display: flex;
    width: 80%;
    flex-direction: column;
    justify-content: space-between;

    border-top: 1px solid rgba(0, 0, 0, 0.3);
    border-top-right-radius: 6px;

    @media (max-width: 750px) {
      border-top: none;
      width: 100%;
    }
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

    @media (max-width: 750px) {
      margin-top: 20px;
    }

    &:hover {
      background: white;
      color: #4abdac;
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.3);
    }
  }
`;

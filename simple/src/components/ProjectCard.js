import React, {useState} from "react";
import styled from "styled-components";

import CardCarousel from './CardCarousel';

export default function ProjectCard(props) {
  let { project } = props;
  const [hasVoted, setHasVoted] = useState(0);

  const voteUp = event => {
    setHasVoted(hasVoted > 0 ? 0 : 1)
  }

  const voteDown = event => {
    setHasVoted(hasVoted < 0 ? 0 : -1)
  }

  return (
    <CardContainer>
      <div className="voteBar">
        <div className="up" onClick={voteUp}><i className="fas fa-chevron-up up" /></div>
        <p className={hasVoted > 0 ? "plus" : hasVoted < 0 ? "minus" : ""}>{project.votes + hasVoted}</p>
        <div className="down" onClick={voteDown}><i className="fas fa-chevron-down down" /></div>
      </div>

      <div className="infoContainer">
        <CardCarousel images={project.images}/>
        <div className="info">
          <div className="head">
            <h3>{project.contractor}</h3>
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
          <p className="quote">
            "Incredibly Professional", "Super Responsive", "They Saved My Cat"
          </p>
          <button className="more">See More</button>
        </div>
      </div>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  align-items: center;

  margin: 15px 15px 15px 0;
  width: 100%;
  max-width: 800px;

  position: relative;
  left: -10px;

  .voteBar {
    text-align: center;
    padding: 20px;

    svg {
      width: 4rem;
      height: 4rem;

      &.up path:hover {
        transition: .2s;
        fill: #4abdac;
      }

      &.down path:hover {
        transition: .2s;
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
  }

  .info {
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-top: 1px solid rgba(0, 0, 0, 0.3);
    border-top-right-radius: 6px;
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
      box-shadow: 2px 2px 1px rgba(0,0,0,0.3);

      transition: .35s;

      &:hover {
        background: white;
        color: #4abdac;
        box-shadow: 0px 0px 1px rgba(0,0,0,0.3);
      }
  }
`;

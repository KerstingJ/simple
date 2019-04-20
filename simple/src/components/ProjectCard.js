import React from "react";
import styled from "styled-components";

import CardCarousel from './CardCarousel';

export default function ProjectCard(props) {
  let { project } = props;

  return (
    <CardContainer>
      <div className="voteBar">
        <i className="fas fa-chevron-up" />
        <p>{project.votes}</p>
        <i className="fas fa-chevron-down" />
      </div>

      <div className="infoContainer">
        <CardCarousel images={project.images}/>
        <div className="info">
          <div className="head">
            <h3>{project.contractor}</h3>
            <h4>{project.client}</h4>
            <p>{project.location}</p>
            <div className="rating">
              {[1, 2, 3, 4, 5].map(ech =>
                ech <= project.rating ? (
                  <i key={ech} className="fas fa-star" />
                ) : (
                  <i ley={ech} className="far fa-star" />
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
    }

    p {
      font-size: 2rem;
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

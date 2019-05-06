import React, { useEffect } from "react";
import styled from "styled-components";
import {connect} from 'react-redux';
import Header from "../components/Header.js";
import LargeCarousel from "../components/LargeCarousel.js";

import { getProjectById } from '../actions/projectActions.js';

function ProjectView(props) {
  const {project} = props;
  // console.log(JSON.stringify(project));

  useEffect(() => {
    let id = props.match.params.id;
    props.getProjectById(id);
  }, []);

  if (!project) {
    return <div>Loading your project</div>;
  }

  const toContractor = event => {
      event.preventDefault();
      props.history.push(`/contractors/${project.contractor_id}`)
  }

  return (
    <>
      <Header nav/>
      <Container>
        {project.images && <LargeCarousel images={project.images} />}
        <div className="infoSection">
          <div className="projectInfo info infoLeft">
            <h2>{project.contractor}</h2>
            <p>in {project.location}</p>
            <p>
              up voted <strong>{project.votes}</strong> times!
            </p>
            <h4>Project Details</h4>
            <p>
              {project.details}
            </p>
            <button className="contact" onClick={toContractor}>Contact {project.contractor}</button>
          </div>
          <div className="clientInfo info infoRight">
            <h3>{project.client}</h3>
            <div className="rating">
              <strong>{`Gave `}</strong>
              {project.rating &&
                [1, 2, 3, 4, 5].map(ech =>
                  ech <= project.rating ? (
                    <i key={ech} className="fas fa-star" />
                  ) : (
                    <i key={ech} className="far fa-star" />
                  )
                )}
            </div>
            <h4>Client Review</h4>
            <p>
              {project.review}
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default connect(state => ({
  project: state.projects.activeProject
}), {
  getProjectById
})(ProjectView)

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 55px;

  h4 {
      margin-top: 20px;
  }

  .infoSection {
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 750px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
  }

  .info {
    margin: 15px 30px;
    border-left: 5px solid #4abdac;
    padding-left: 15px;
    width: 50%;
    @media (max-width: 750px) {
      width: 90%;
    }
  }

  .rating svg {
    position: relative;
    top: 4px;
    margin: 3px;

    &:first-child {
      margin-left: 0;
    }

    path {
      fill: #f7b733;
    }
  }

  .contact {
    margin-top: 10px;
    background: #4abdac;
    color: white;
    border: 2px solid #41bdac;
    box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.3);

    transition: 0.35s;

    @media (max-width: 750px) {
      width: 100%;
    }

    &:hover {
      background: white;
      color: #4abdac;
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.3);
    }
  }
`;

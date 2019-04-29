import React, { useEffect } from "react";
import styled from "styled-components";
import {connect} from 'react-redux';

import Header from "../components/Header";
import SmallProjectCard from "../components/SmallProjectCard";

import { getContractorById } from '../actions/contractorsActions'
import { getMostOccuring } from "../utils/ArrayManip.js";

function ContractorView(props) {
  const { contractor } = props;
  const { projects } = contractor || undefined;

  useEffect(() => {
    let id = props.match.params.id;
    props.getContractorById(id);
  }, []);

  if (!contractor) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Header nav/>
      <Container>
        <div className="contractorInfo">
          <img alt="contractor profile" src={contractor.image} />
          <div>
            {/* Contractor Name */}
            <h2 className="contact">Contact Info: </h2>
            {/* Phone */}
            <a className="contactBtn" href={`tel:${contractor.phone}`}>{contractor.phone}</a>
            {/* email */}
            <a className="contactBtn" href={`mailto:${contractor.email}`}>{contractor.email}</a>
            {/* address */}
            <span className="contactBtn">{contractor.address}</span>
            {/* Hours */}
          </div>
        </div>
        <div className="projectInfo">
          <div className="projectsBreakdown infoBox">
            <h2>{contractor.name}</h2>
            {projects && (
              <p>
                Has <strong>{projects.length}</strong> available projects
              </p>
            )}
            {/* avg project rating */}
            {projects && (
              <p>
                With an average rating of{" "}
                <strong>
                  {(
                    projects.reduce(
                      (total, current) => total + current.rating,
                      0
                    ) / projects.length
                  ).toFixed(2)} Stars
                </strong>
              </p>
            )}
            {/* total upvotes */}
            {projects && (
              <p>
                Upvoted a total of{" "}
                <strong>
                  {projects.reduce(
                    (total, current) => total + current.votes,
                    0
                  )}{" "}
                  Times
                </strong>
              </p>
            )}
            </div>
            <div className="infoBox">
            {/* common project tags */}
            <h4>Most Used Tags: </h4>
            {projects &&
              getMostOccuring(projects.map(p => p.tags).flat()).map(tag => (
                <span key={tag} className="tag">
                  {tag.toUpperCase()}
                </span>
              ))}
          </div>
          <div className="recentProjects">{/* project cards? */}
            {projects && projects.sort((x, y) => x.votes > y.votes ? -1 : 1).map(project => <SmallProjectCard key={project.id} project={project} />)}
          </div>
        </div>
      </Container>
    </>
  );
}

export default connect(state => ({
  contractor: state.contractors.activeContractor
}), {
  getContractorById
})(ContractorView);

const Container = styled.div`
  max-width: 1000px;
  padding-top: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  .contractorInfo {
    max-width: 200px;

    h2.contact{
      padding-left: 10px
    }
  }

  img {
    max-width: 200px;
  }

  .contactBtn {
    display: inline-block;
    padding: 10px;
    margin: 6px 0;
    width: 100%;

    background: #4abdac;
    color: white;

    border-radius: 3px;
    border: 2px solid #4abdac;

    box-shadow: 2px 2px 1px rgba(0,0,0,0.4);

    transition: .25s;

    &:hover {
      text-decoration: none;
      /* background: white;
      color: #4abdac; */
      box-shadow: 0px 0px 1px rgba(0,0,0,0.4);
    }
  }

  .projectInfo {
    .infoBox {
      border-left: 3px solid #4abdac;
      margin-left: 20px;
      padding: 10px;
      margin-bottom: 15px;

      p {
        padding-left: 10px;
      }
    }

    h2 {
      margin-bottom: 10px;
    }

    h4 {
      margin-bottom: 10px;
    }

    .tag {
      margin: 10px;
      padding: 0 7px 2px 7px;
      border-radius: 3px;
      border-bottom: 2px solid grey;
      border-right: 2px solid grey;

      background: #dfdce3;
    }
  }
`;

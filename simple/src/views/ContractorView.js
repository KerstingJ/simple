import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "../components/Header";

import { contractors as data } from "../dummy-data.js";
import { getMostOccuring } from "../utils/ArrayManip.js";

export default function(props) {
  const [contractor, setContractor] = useState({});
  const { projects } = contractor;

  useEffect(() => {
    let id = props.match.params.id;
    setContractor(data.find(c => c.id + "" === id + ""));
  }, []);

  if (!contractor) {
    return <div>Loading</div>;
  }

  console.log(contractor);
  return (
    <>
      <Header />
      <Container>
        <div className="contractorInfo">
          <img alt="contractor profile" src={contractor.image} />
          <div className="infoContent">
            {/* Contractor Name */}
            <h2>Contact Info: </h2>
            {/* Phone */}
            <p>{contractor.phone}</p>
            {/* email */}
            <p>{contractor.email}</p>
            {/* address */}
            <p>{contractor.address}</p>
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
                  ).toFixed(2)}
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
            {/* common project tags */}
            <h4>Most Used Tags: </h4>
            {projects &&
              getMostOccuring(projects.map(p => p.tags).flat()).map(tag => (
                <span key={tag} className="tag">
                  {tag.toUpperCase()}
                </span>
              ))}
          </div>
          <div className="recentProjects infoBox">{/* project cards? */}</div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: 1000px;
  padding-top: 70px;
  margin: 0 auto;
  display: flex;

  img {
    max-width: 300px;
  }

  .projectInfo {
    .infoBox {
      border-left: 3px solid #4abdac;
      margin-left: 20px;
      padding: 10px;

      p {
        padding-left: 10px;
      }
    }

    h2 {
      margin-bottom: 10px;
    }

    h4 {
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .tag {
      margin: 10px;
      padding: 0 7px 2px 7px;
      border-radius: 3px;
      border-bottom: 2px solid grey;
      border-left: 2px solid grey;

      background: #dfdce3;
    }
  }
`;

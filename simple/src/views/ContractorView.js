import React from "react";
import styled from "styled-components";

import Header from '../components/Header'

export default function(props) {
  return (
    <>
      <Header>
        <Container>
          <div className="conttractorInfo">
            {/* Contractor Name */}
            {/* Location */}
            {/* Phone */}
            {/* email */}
            {/* address */}
            {/* Hours */}
          </div>
          <div className="projectsBreakdown">
            {/* common project tags */}
            {/* Number of projects */}
            {/* avg project rating */}
            {/* total upvotes */}
          </div>
          <div className="recentProjects">
            {/* project cards? */}
          </div>
        </Container>
      </Header>
    </>
  );
}

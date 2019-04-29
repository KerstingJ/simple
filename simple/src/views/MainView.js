import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";

import { getProjectsList } from "../actions/projectActions.js";

function MainView(props) {
  const projects =
    props.filteredList.length > 0 ? props.filteredList : props.projectsList;

  useEffect(() => {
    props.getProjectsList();
  }, []);

  return (
    <>
      <Header search nav />
      <Container>
        {projects
          .sort((x, y) => (x.votes > y.votes ? -1 : 1))
          .map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </Container>
    </>
  );
}

export default connect(
  state => ({
    projectsList: state.projects.projectsList,
    filteredList: state.projects.filteredList
  }),
  {
    getProjectsList
  }
)(MainView);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 100px;

  @media (max-width: 500px) {
    margin: 0 15px;
  }
`;

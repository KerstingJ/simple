import React, {useEffect} from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';

import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard'
import data from '../dummy-data';

function MainView(props){
    useEffect(()=>{
    }, [])

    return (<>
        <Header />
        <Container>
            <ProjectCard project={data[0]} />
            <ProjectCard project={data[0]} />
            <ProjectCard project={data[0]} />
            <ProjectCard project={data[0]} />
            <ProjectCard project={data[0]} />
            <ProjectCard project={data[0]} />
            <ProjectCard project={data[0]} />
            <ProjectCard project={data[0]} />
        </Container>
    </>)
}

export default connect(state => ({
}), {
})(MainView)

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 100px;


`
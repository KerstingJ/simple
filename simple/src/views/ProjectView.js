import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Header from '../components/Header.js';
import LargeCarousel from '../components/LargeCarousel.js';

import data from '../dummy-data'

export default function(props){
    const [project, setProject] = useState({})
    
    useEffect(()=>{
        let id = props.match.params.id;
        setProject(data.find(d => d.id == id))
    })

    if (!project) {
        return <div>Somethings wrong with your project</div>
    }

    return (<>
        <Header />
        <Container>
            {project.images && <LargeCarousel images={project.images}/>}
            <div className="projectInfo">
                {/* Contractor Name */}
                {/* location */}
                {/* Rating / Votes */}
                {/* Date */}
                {/* Description of Job */}
            </div>
            <div className="clientInfo">
                {/* Client Name */}
                {/* Rating */}
                {/* Review */}
            </div>
        </Container>
    </>)
}

const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 55px;
`
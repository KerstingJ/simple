import React from 'react';
import styled from 'styled-components';

export default function(props){
    const {client} = props;

    return (
        <Contact>
            <div className="cName">
                {client.name}
            </div>
        </Contact>
    )
}

const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`
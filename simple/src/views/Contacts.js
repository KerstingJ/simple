import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Contact from '../components/Contact';

/* 

    This should be a contacts list like view.
    showing a list of names in alphabetical order
        - when you click on a name it should expand to show contact information
        - and also give you the ability to expand into a view showing all information for that contact

*/

export default function(props){
    const { clients } = props

    return(
        <div>
            <Header />
            <Contacts>
                {console.log(clients)}
                {clients && clients.map(client => <Contact client={client} />)}
            </Contacts>
        </div>
    )
}

const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'


import Header from '../components/Header'
import ClientInfo from '../components/ClientInfo';

/*

    This should show all information about a client

    -name
    -business
    -phone
    -address

    -list of previous projects / project quick view
    -list of current/upcoming projects

*/
function ClientView(props){

    console.log(props)

    return(
        <div>
            <Header />
            <div>
                <ClientInfo client={props.client} />
            </div>
        </div>
    )
}

export default connect(null, {

})(ClientView)
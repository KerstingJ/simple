import React, {useEffect} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

import {getClientById} from '../actions/clientActions'

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

    useEffect(()=>{
        let clientId = props.match.params.clientId
        props.getClientById(clientId)
    }, [])

    return(
        <div>
            <Header />
            <div>
                {props.client ? <ClientInfo client={props.client} /> : <div>Loading</div>}
            </div>
        </div>
    )
}

export default connect(state => ({
    client: state.clients.client
}), {
    getClientById
})(ClientView)
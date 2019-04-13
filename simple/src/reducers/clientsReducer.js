import {
    GET_CLIENTS_LIST, GET_CLIENTS_LIST_SUCCESS, GET_CLIENTS_LIST_FAILURE,
    GET_CLIENT, GET_CLIENT_SUCCESS, GET_CLIENT_FAILURE
} from '../actions/clientActions'


const initialState = {
    clientsList: [],
    gettingClientsList: false,
    gettingClientsListError: null,

    client: {},
    gettingClient: false,
    gettingClientError: null
}

export default function(state = initialState, action){
    
    switch(action.type){
        case GET_CLIENTS_LIST:
            return getClientsList(state, action);
        case GET_CLIENTS_LIST_SUCCESS:
            return getClientsListSuccess(state, action);
        case GET_CLIENTS_LIST_FAILURE:
            return getClientsListFailure(state, action);

        case GET_CLIENT:
            return getClient(state, action);
        case GET_CLIENT_SUCCESS:
            return getClientSuccess(state, action);
        case GET_CLIENT_FAILURE:
            return getClientFailure(state, action);

        default:
            return state;
    }
}


// Reducer Functions for Adding a List of Clients to state
function getClientsList(state, action){
    return {
        ...state,
        gettingClientsList: true,
        gettingClientsListError: null
    }
}
function getClientsListSuccess(state, action){
    return {
        ...state,
        clientsList: action.payload,
        gettingClientsList: false,
        gettingClientsListError: null
    }
}
function getClientsListFailure(state, action){
    return {
        ...state,
        gettingClientsList: false,
        gettingClientsListError: action.payload

    }
}


// Reducer Functions for Adding an Active Client to State
function getClient(state, action){
    return {
        ...state,
        gettingClient: true,
        gettingClientError: null
    }
}
function getClientSuccess(state, action){
    return {
        ...state,
        client: action.payload,
        gettingClient: false,
        gettingClientError: null
    }
}
function getClientFailure(state, action){
    return {
        ...state,
        gettingClient: false,
        gettingClientError: action.payload

    }
}
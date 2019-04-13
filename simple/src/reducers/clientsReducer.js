import {
    GET_CLIENTS, GET_CLIENTS_SUCCESS, GET_CLIENTS_FAILURE
} from '../actions/clientActions'


const initialState = {
    clients: [],
    gettingClients: false,
    gettingClientsError: null,
}

export default function(state = initialState, action){
    
    switch(action.type){
        case GET_CLIENTS:
            return getClients(state, action);
        case GET_CLIENTS_SUCCESS:
            return getClientsSuccess(state, action);
        case GET_CLIENTS_FAILURE:
            return getClientsFailure(state, action);
        default:
            return state;
    }
}

function getClients(state, action){
    return {
        ...state,
        gettingClients: true,
        gettingClientsError: null
    }
}
function getClientsSuccess(state, action){
    return {
        ...state,
        clients: action.payload,
        gettingClients: false,
        gettingClientsError: null
    }
}
function getClientsFailure(state, action){
    return {
        ...state,
        gettingClients: false,
        gettingClientsError: action.payload

    }
}
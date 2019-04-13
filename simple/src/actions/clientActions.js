import { clients as c, getClientById as getCById } from '../models/dummy-data'; // this needs to be replaced by a database call



// GET_CLIENTS, GET_CLIENTS_SUCCESS, GET_CLIENTS_FAILURE
export const GET_CLIENTS = "GET_CLIENTS"
export const GET_CLIENTS_SUCCESS = "GET_CLIENTS_SUCCESS"
export const GET_CLIENTS_FAILURE = "GET_CLIENTS_FAILURE"

export const getClients = () => dispatch => {
    dispatch({
        type: GET_CLIENTS
    })

    // need to make a request to DB here and put inside then catch
    dispatch({
        type: GET_CLIENTS_SUCCESS,
        payload: c
    })

    // dispatch({
    //     type: GET_CLIENTS_FAILURE,
    //     payload: "error message"
    // })
}

// GET_CLIENT_BY_ID, GET_CLIENT_BY_ID_SUCCESS, GET_CLIENT_BY_ID_FAILURE
export const GET_CLIENT_BY_ID = "GET_CLIENT_BY_ID"
export const GET_CLIENT_BY_ID_SUCCESS = "GET_CLIENT_BY_ID_SUCCESS"
export const GET_CLIENT_BY_ID_FAILURE = "GET_CLIENT_BY_ID_FAILURE"

export const getClientById = id => dispatch => {
    dispatch({
        type: GET_CLIENT_BY_ID
    })

    dispatch({
        type: GET_CLIENT_BY_ID_SUCCESS,
        payload: getCById(id)
    })

    // dispatch({
    //     type: GET_CLIENT_BY_ID_FAILURE,
    //     payload: "error message"
    // })
}
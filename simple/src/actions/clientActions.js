import { clients as c, getClientById as getCById } from '../models/dummy-data'; // this needs to be replaced by a database call



// GET_CLIENTS_LIST, GET_CLIENTS_LIST_SUCCESS, GET_CLIENTS_LIST_FAILURE
export const GET_CLIENTS_LIST = "GET_CLIENTS_LIST"
export const GET_CLIENTS_LIST_SUCCESS = "GET_CLIENTS_LIST_SUCCESS"
export const GET_CLIENTS_LIST_FAILURE = "GET_CLIENTS_LIST_FAILURE"

export const getClients = () => dispatch => {
    dispatch({
        type: GET_CLIENTS_LIST
    })

    // need to make a request to DB here and put inside then catch
    dispatch({
        type: GET_CLIENTS_LIST_SUCCESS,
        payload: c
    })

    // dispatch({
    //     type: GET_CLIENTS_LIST_FAILURE,
    //     payload: "error message"
    // })
}

// GET_CLIENT, GET_CLIENT_SUCCESS, GET_CLIENT_FAILURE
export const GET_CLIENT = "GET_CLIENT"
export const GET_CLIENT_SUCCESS = "GET_CLIENT_SUCCESS"
export const GET_CLIENT_FAILURE = "GET_CLIENT_FAILURE"

export const getClientById = id => dispatch => {
    dispatch({
        type: GET_CLIENT
    })

    console.log(getCById(id))

    dispatch({
        type: GET_CLIENT_SUCCESS,
        payload: getCById(id)
    })

    // dispatch({
    //     type: GET_CLIENT_FAILURE,
    //     payload: "error message"
    // })
}
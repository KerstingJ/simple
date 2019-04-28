//import axios from '../utils/axiosWithExtra';

import {contractors} from '../dummy-data';


// GET_CONTRACTORS_LIST, GET_CONTRACTORS_LIST_SUCCESS, GET_CONTRACTORS_LIST_FAILURE
export const GET_CONTRACTORS_LIST = "GET_CONTRACTORS_LIST"
export const GET_CONTRACTORS_LIST_SUCCESS = "GET_CONTRACTORS_LIST_SUCCESS"
export const GET_CONTRACTORS_LIST_FAILURE = "GET_CONTRACTORS_LIST_FAILURE"

export const getContractorsList = () => dispatch => {
    dispatch({
        type: GET_CONTRACTORS_LIST,
        payload: contractors
    })

    // return axios
    //     .get('contractors')
    //     .then(res => {
    //         dispatch({
    //             type: GET_CONTRACTORS_LIST_SUCCESS,
    //             payload: res.data
    //         })
    //     })
    //     .catch(err => {
    //         console.log("Error Getting Contractors List", err)
    //         dispatch({
    //             type: GET_CONTRACTORS_LIST_FAILURE,
    //             payload: err
    //         })
    //     })
}


// GET_CONTRACTOR, GET_CONTRACTOR_SUCCESS, GET_CONTRACTOR_FAILURE
export const GET_CONTRACTOR = "GET_CONTRACTOR"
export const GET_CONTRACTOR_SUCCESS = "GET_CONTRACTOR_SUCCESS"
export const GET_CONTRACTOR_FAILURE = "GET_CONTRACTOR_FAILURE"

export const getContractorById = id => dispatch => {
    dispatch({
        type: GET_CONTRACTOR,
        payload: contractors.find(c => c.id+"" === id)
    })

    // return axios
    //     .get('contractors/:id')
    //     .then(res => {
    //         dispatch({
    //             type: GET_CONTRACTOR_SUCCESS,
    //             payload: res.data
    //         })
    //     })
    //     .catch(err => {
    //         console.log("Error Getting Contractor", err)
    //         dispatch({
    //             type: GET_CONTRACTOR_FAILURE,
    //             payload: err
    //         })
    //     })
}


// ADD_CONTRACTOR, ADD_CONTRACTOR_SUCCESS, ADD_CONTRACTOR_FAILURE
export const ADD_CONTRACTOR = "ADD_CONTRACTOR"
export const ADD_CONTRACTOR_SUCCESS = "ADD_CONTRACTOR_SUCCESS"
export const ADD_CONTRACTOR_FAILURE = "ADD_CONTRACTOR_FAILURE"

export const addContractor = contractor => dispatch => {
    dispatch({
        type: ADD_CONTRACTOR
    })

    // return axios
    //     .post('contractors', contractor)
    //     .then(res => {
    //         dispatch({
    //             type: ADD_CONTRACTOR_SUCCESS,
    //             payload: res.data
    //         })
    //     })
    //     .catch(err => {
    //         console.log("Error Adding Contractor", err)
    //         dispatch({
    //             type: ADD_CONTRACTOR_FAILURE,
    //             payload: err
    //         })
    //     })
}


// UPDATE_CONTRACTOR, UPDATE_CONTRACTOR_SUCCESS, UPDATE_CONTRACTOR_FAILURE
export const UPDATE_CONTRACTOR = "UPDATE_CONTRACTOR"
export const UPDATE_CONTRACTOR_SUCCESS = "UPDATE_CONTRACTOR_SUCCESS"
export const UPDATE_CONTRACTOR_FAILURE = "UPDATE_CONTRACTOR_FAILURE"

export const updateContractor = contractor => dispatch => {
    dispatch({
        type: UPDATE_CONTRACTOR
    })

    // return axios
    //     .put('contractors/:id', contractor)
    //     .then(res => {
    //         dispatch({
    //             type: UPDATE_CONTRACTOR_SUCCESS,
    //             payload: res.data
    //         })
    //     })
    //     .catch(err => {
    //         console.log("Error Adding Contractor", err)
    //         dispatch({
    //             type: UPDATE_CONTRACTOR_FAILURE,
    //             payload: err
    //         })
    //     })
}

// DELETE_CONTRACTOR, DELETE_CONTRACTOR_SUCCESS, DELETE_CONTRACTOR_FAILURE
export const DELETE_CONTRACTOR = "DELETE_CONTRACTOR"
export const DELETE_CONTRACTOR_SUCCESS = "DELETE_CONTRACTOR_SUCCESS"
export const DELETE_CONTRACTOR_FAILURE = "DELETE_CONTRACTOR_FAILURE"

export const deleteContractor = id => dispatch => {
    dispatch({
        type: DELETE_CONTRACTOR
    })

    // return axios
    //     .delete('contractors/:id')
    //     .then(res => {
    //         dispatch({
    //             type: DELETE_CONTRACTOR_SUCCESS,
    //             payload: res.data
    //         })
    //     })
    //     .catch(err => {
    //         console.log("Error Adding Contractor", err)
    //         dispatch({
    //             type: DELETE_CONTRACTOR_FAILURE,
    //             payload: err
    //         })
    //     })
}
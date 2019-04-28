import axios from '../utils/axiosWithExtra';

import {projects} from '../dummy-data';


// GET_PROJECTS_LIST, GET_PROJECTS_LIST_SUCCESS, GET_PROJECTS_LIST_FAILURE
export const GET_PROJECTS_LIST = "GET_PROJECTS_LIST"
export const GET_PROJECTS_LIST_SUCCESS = "GET_PROJECTS_LIST_SUCCESS"
export const GET_PROJECTS_LIST_FAILURE = "GET_PROJECTS_LIST_FAILURE"

export const getProjectsList = () => dispatch => {
    dispatch({
        type: GET_PROJECTS_LIST,
        payload: projects
    })

    // return axios
    //     .get('projects')
    //     .then(res => {
    //         dispatch({
    //             type: GET_PROJECTS_LIST_SUCCESS,
    //             payload: res.data
    //         })
    //     })
    //     .catch(err => {
    //         console.log("Error Getting Projects List", err)
    //         dispatch({
    //             type: GET_PROJECTS_LIST_FAILURE,
    //             payload: err
    //         })
    //     })
}


// GET_PROJECT, GET_PROJECT_SUCCESS, GET_PROJECT_FAILURE
export const GET_PROJECT = "GET_PROJECT"
export const GET_PROJECT_SUCCESS = "GET_PROJECT_SUCCESS"
export const GET_PROJECT_FAILURE = "GET_PROJECT_FAILURE"

export const getProjectById = id => dispatch => {
    dispatch({
        type: GET_PROJECT
    })

    // return axios
    //     .get('projects/:id')
    //     .then(res => {
    //         dispatch({
    //             type: GET_PROJECT_SUCCESS,
    //             payload: res.data
    //         })
    //     })
    //     .catch(err => {
    //         console.log("Error Getting Project", err)
    //         dispatch({
    //             type: GET_PROJECT_FAILURE,
    //             payload: err
    //         })
    //     })
}


// ADD_PROJECT, ADD_PROJECT_SUCCESS, ADD_PROJECT_FAILURE
export const ADD_PROJECT = "ADD_PROJECT"
export const ADD_PROJECT_SUCCESS = "ADD_PROJECT_SUCCESS"
export const ADD_PROJECT_FAILURE = "ADD_PROJECT_FAILURE"

export const addProject = project => dispatch => {
    dispatch({
        type: ADD_PROJECT
    })

    // return axios
    //     .post('projects', project)
    //     .then(res => {
    //         dispatch({
    //             type: ADD_PROJECT_SUCCESS,
    //             payload: res.data
    //         })
    //     })
    //     .catch(err => {
    //         console.log("Error Adding Project", err)
    //         dispatch({
    //             type: ADD_PROJECT_FAILURE,
    //             payload: err
    //         })
    //     })
}


// UPDATE_PROJECT, UPDATE_PROJECT_SUCCESS, UPDATE_PROJECT_FAILURE
export const UPDATE_PROJECT = "UPDATE_PROJECT"
export const UPDATE_PROJECT_SUCCESS = "UPDATE_PROJECT_SUCCESS"
export const UPDATE_PROJECT_FAILURE = "UPDATE_PROJECT_FAILURE"

export const updateProject = project => dispatch => {
    dispatch({
        type: UPDATE_PROJECT
    })

    // return axios
    //     .put('projects/:id', project)
    //     .then(res => {
    //         dispatch({
    //             type: UPDATE_PROJECT_SUCCESS,
    //             payload: res.data
    //         })
    //     })
    //     .catch(err => {
    //         console.log("Error Adding Project", err)
    //         dispatch({
    //             type: UPDATE_PROJECT_FAILURE,
    //             payload: err
    //         })
    //     })
}

// DELETE_PROJECT, DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAILURE
export const DELETE_PROJECT = "DELETE_PROJECT"
export const DELETE_PROJECT_SUCCESS = "DELETE_PROJECT_SUCCESS"
export const DELETE_PROJECT_FAILURE = "DELETE_PROJECT_FAILURE"

export const deleteProject = id => dispatch => {
    dispatch({
        type: DELETE_PROJECT
    })

    // return axios
    //     .delete('projects/:id')
    //     .then(res => {
    //         dispatch({
    //             type: DELETE_PROJECT_SUCCESS,
    //             payload: res.data
    //         })
    //     })
    //     .catch(err => {
    //         console.log("Error Adding Project", err)
    //         dispatch({
    //             type: DELETE_PROJECT_FAILURE,
    //             payload: err
    //         })
    //     })
}
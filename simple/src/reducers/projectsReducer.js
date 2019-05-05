import {
    GET_PROJECTS_LIST, GET_PROJECTS_LIST_SUCCESS, GET_PROJECTS_LIST_FAILURE, 
    GET_PROJECT, GET_PROJECT_SUCCESS, GET_PROJECT_FAILURE,
    GET_PROJECTS_LIST_BY_TAG,
    CLEAR_FILTER,
} from '../actions/projectActions'

const initialState = {
    projectsList: [],
    activeProject: {},
    filteredList: [],
    currentFilter: "",
    error: null,
    hasFiltered: true,
    gettingProjectsList: false,
    gettingProject: false,
    addingProject: false,
    updatingProject: false,
    deletingProject: false,
}

export default (state = initialState, action) => {
    
    switch(action.type){
        case GET_PROJECTS_LIST:
            return {
                ...state,
                error: null,
                activeProject: {}
            }
        case GET_PROJECTS_LIST_SUCCESS:
            return {
                ...state,
                error: null,
                projectsList: action.payload
            }
        case GET_PROJECTS_LIST_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case GET_PROJECT:
            return {
                ...state,
                error: null
            }
        case GET_PROJECT_SUCCESS:
            return {
                ...state,
                error: null,
                activeProject: action.payload
            }
        case GET_PROJECT_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case GET_PROJECTS_LIST_BY_TAG:
            return {
                ...state,
                error: null,
                filteredList: action.payload.list,
                currentFilter: action.payload.filter
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filteredList: []
            }
        default:
            return state
    }
    
}
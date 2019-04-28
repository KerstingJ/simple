import {
    GET_PROJECTS_LIST, GET_PROJECTS_LIST_SUCCESS, GET_PROJECTS_LIST_FAILURE, 
    GET_PROJECT,
    GET_PROJECTS_LIST_BY_TAG,
    CLEAR_FILTER
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
                activeProject: {},
                projectsList: action.payload
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
        case GET_PROJECT:
            console.log(action)
            return {
                ...state,
                error: null,
                activeProject: action.payload
            }
        default:
            return state
    }
    
}
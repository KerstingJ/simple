import {
    GET_PROJECTS_LIST, GET_PROJECTS_LIST_SUCCESS, GET_PROJECTS_LIST_FAILURE,
} from '../actions/projectActions'

const initialState = {
    projectsList: [],
    activeProject: null,
    error: null,
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
                activeProject: null,
                projectsList: action.payload
            }
        default:
            return state
    }
    
}
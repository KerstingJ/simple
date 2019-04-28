import {
    GET_CONTRACTORS_LIST, GET_CONTRACTORS_LIST_SUCCESS, GET_CONTRACTORS_LIST_FAILURE,
} from '../actions/contractorActions'

const initialState = {
    contractorsList: [],
    activeContractor: null,
    error: null,
    gettingContractorsList: false,
    gettingContractor: false,
    addingContractor: false,
    updatingContractor: false,
    deletingContractor: false,
}

export default (state = initialState, action) => {
    
    switch(action.type){
        case GET_CONTRACTORS_LIST:
            return {
                ...state,
                error: null,
                activeContractor: null,
                contractorsList: action.payload
            }
        default:
            return state
    }
    
}
import {
    GET_CONTRACTORS_LIST, GET_CONTRACTORS_LIST_SUCCESS, GET_CONTRACTORS_LIST_FAILURE,
} from '../actions/contractorsActions'
import { GET_CONTRACTOR } from '../actions/contractorsActions';

const initialState = {
    contractorsList: [],
    activeContractor: {},
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
                activeContractor: {},
                contractorsList: action.payload
            }
        case GET_CONTRACTOR:
            return {
                ...state,
                error: null,
                activeContractor: action.payload
            }
        default:
            return state
    }
    
}
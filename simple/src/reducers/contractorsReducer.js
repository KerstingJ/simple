import {
    GET_CONTRACTORS_LIST, /*GET_CONTRACTORS_LIST_SUCCESS, GET_CONTRACTORS_LIST_FAILURE,*/
    GET_CONTRACTOR, GET_CONTRACTOR_SUCCESS, GET_CONTRACTOR_FAILURE,
} from '../actions/contractorsActions'

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
                activeContractor: {}
            }
        case GET_CONTRACTOR:
            return {
                ...state,
                error: null
            }
        case GET_CONTRACTOR_SUCCESS:
            return {
                ...state,
                activeContractor: action.payload
            }
        case GET_CONTRACTOR_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
    
}
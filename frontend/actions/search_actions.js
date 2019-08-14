import * as SearchAPIUtil from '../util/search_api_util';


export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const CLEAR_SEARCH = "CLEAR_SEARCH"


export const receiveSearchResults = (results) => {

    return {
        type: RECEIVE_SEARCH_RESULTS,
        results
    }

}


export const fetchSearchResults = (input) => dispatch => (
    SearchAPIUtil.fetchSearchResults(input).then(
        results => dispatch(receiveSearchResults(results))
    )
);


export const clearSearch = () => {
    return {
        type: CLEAR_SEARCH,
    }
};
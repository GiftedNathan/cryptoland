// creating an initial state 
export const INITIAL_STATE = {
    loading: false,
    newsData:[],
    error: false,
}


export const newsReducer = (state, action) => {

    switch (action.type) {

        case 'FETCH_START':
            return {
                loading: true,
                newsData: [],
                error: false,
            }
            break;

        case 'FETCH_SUCCESS':
            return {
                loading: false,
                newsData: action.payload,
                error: false,
            }            
            break;

        case 'FETCH_ERROR':
            return {
                loading: false,
                newsData: [],
                error: true,
            }
            break;

        default:

            return state

            break;
    }
}

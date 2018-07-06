
const BASE_URL = process.env.REACT_APP_BASE_URL;

function callApi(endpoint) {
    return fetch(BASE_URL + endpoint)
        .then(response =>
            response.json().then(data => (
                {data, status: response.status}))
        ).catch(err => [{type:'error', message: err.message, status: 500}]);
}

export const CALL_API = Symbol('Call API');

export default store => next => action => {
    const callAPI = action[CALL_API];
    // So the middleware doesn't get applied to every single action
    if (typeof callAPI === 'undefined') {
        return next(action);
    }
    let { endpoint, types } = callAPI;
    const [ requestType, successType, errorType ] = types;

    return (next({type:requestType}),
        callApi(endpoint).then(
            response => {
                if (response.status === 200) {
                    return next({
                        response,
                        type: successType
                    })
                } else {
                    return next({
                        response,
                        type: errorType
                    })
                }
            }
        ))
}

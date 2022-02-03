const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false,
            }
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            }
        case "LOGIN_FAILED":
            return {
                user: null,
                isFetching: false,
                error: true,
            }
        case "UPDATE_START":
            return {
                user: state.user,
                error: false,
                isFetching: true,

            }
        case "UPDATE_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            }
        case "UPDATE_FAILED":
            return {
                user: state.user,
                isFetching: false,
                error: true,
            }
        case "LOGOUT":
            return {
                user: null,
                isFetching: false,
                error: false,
            }
        default:
            return {
                state
            }
    }
}


export default Reducer;
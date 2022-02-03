export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START"
})
export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
})
export const LoginFailed = () => ({
    type: "LOGIN_FAILED"
})
export const Logout = () => ({
    type: "LOGOUT"
})
export const UpdateStart = () => ({
    type: "UPDATE_START"
})
export const UpdateSuccess = (user) => ({
    type: "UPDATE_SUCCESS",
    payload: user
})
export const UpdateFailed = () => ({
    type: "UPDATE_FAILED"
})
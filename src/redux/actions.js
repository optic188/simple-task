export const Types = {
    LOAD_RESUME: "LOAD_RESUME",
    LOGIN: "LOGIN",
    REGISTER: "REGISTER"
};
export const loadResume = payload => ({
    type: Types.LOAD_RESUME,
    payload
});
export const login = payload => ({
    type: Types.LOGIN,
    payload
});
export const register = () => ({
    type: Types.REGISTER,
});

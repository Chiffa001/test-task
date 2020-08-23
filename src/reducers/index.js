const initialState = {
    userExist: false,
    terminals: [],
    buyers: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_EXIST":
            return {...state, userExist: true}
        default:
            return state;
    }
};

export default reducer;

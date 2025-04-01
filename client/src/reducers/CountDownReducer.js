const countDownReducer = (state = { seconds: 0 }, action) => {
    switch (action.type) {
        case "SET_COUNTDOWN":
            return { ...state, seconds: action.seconds };
        default:
            return state;
    }
};

export default countDownReducer;
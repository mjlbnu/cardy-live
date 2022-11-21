const timerReducer = ( state = { seconds: 0 },
   action) => {
    switch (action.type) {
      case "START_TIMER":
        return {...state, seconds: action.seconds};
      default:
        return state;
    }
   };

  export default timerReducer;

const lieReducer = ( state = { lie: null },
  action) => {
   switch (action.type) {
     case "SHOW_LIE":
       return {...state, lie: action.lie};
     default:
       return state;
   }
  };

 export default lieReducer;
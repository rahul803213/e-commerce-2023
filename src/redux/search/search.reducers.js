import SearchActionTypes from "./search.types";
const INITIAL_STATE = {
    string:""
}

const SearchReducer = (state=INITIAL_STATE,action) =>{
  switch(action.type){
      
    case SearchActionTypes.TOGGLE_SEARCH :
        return({
            ...state,
            string:action.payload
        })


    default: return state;
  }





}
export default SearchReducer;
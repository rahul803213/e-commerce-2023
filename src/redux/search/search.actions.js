import SearchActionTypes from "./search.types"

export const toggleSearch =(item) =>({
    type:SearchActionTypes.TOGGLE_SEARCH,
    payload:item
})


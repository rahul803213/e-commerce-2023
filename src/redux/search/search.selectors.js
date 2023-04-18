import { createSelector } from "reselect";

const selectSearch= state => state.search;

export const selectString = createSelector(
    [selectSearch],
    search=>search.string
)
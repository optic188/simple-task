export const Types = {
    INITIAL_DATA: "INITIAL_DATA",
    SEARCH_ITEM: "SEARCH_ITEM",
    RESET_ITEM: "RESET_ITEM"
};
export const loadItem = payload => ({
    type: Types.INITIAL_DATA,
    payload
});
export const searchItem = payload => ({
    type: Types.SEARCH_ITEM,
    payload
});
export const resetItem = () => ({
    type: Types.RESET_ITEM,
});

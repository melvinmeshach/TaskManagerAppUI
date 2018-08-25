export const ADD_CARD_GROUP     =   "ADD_CARD_GROUP";
export const ADD_CARD_GROUP_SUCCESS     =   "ADD_CARD_GROUP_SUCCESS";
export const UPDATE_CARD_GROUP = "UPDATE_CARD_GROUP"
export const addCardGroupRequest = cardGroup=>({
    type : ADD_CARD_GROUP,
    cardGroup
});
export const addCardGroupSuccess = cardGroup=>({
    type : ADD_CARD_GROUP_SUCCESS,
    cardGroup
});

export const updateCardGroup = cardGroup=>({
    type : UPDATE_CARD_GROUP,
    cardGroup
});
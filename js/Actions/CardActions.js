export const ADD_CARD     =   "ADD_CARD";
export const ADD_CARD_SUCCESS     =   "ADD_CARD_SUCCESS";
export const UPDATE_CARD = "UPDATE_CARD";
export const MOVE_CARD = "MOVE_CARD";

export const addCard = (cardGroupId,card)=>({
    type : ADD_CARD,
    card,
    cardGroupId
});

export const addCardSuccess = (cardGroupId,card)=>({
    type : ADD_CARD_SUCCESS,
    card,
    cardGroupId
});

export const updateCard = (cardGroupId,card) =>({
    type : UPDATE_CARD,
    card,
    cardGroupId
})

export const moveCardToAnotherGroup = (cardId, oldCardGroupId, newCardGroupId)=>({
    type : MOVE_CARD,
    cardId,
    oldCardGroupId, 
    newCardGroupId
})
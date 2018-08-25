import { ADD_CARD_SUCCESS, UPDATE_CARD, MOVE_CARD  } from '../Actions/CardActions.js'
import {  ADD_CARD_GROUP_SUCCESS, UPDATE_CARD_GROUP } from '../Actions/CardGroupActions.js'
import { defaultReducerState } from '../Utility'
const CardsReducer		=	( state = defaultReducerState() , action ) => {

	switch( action.type )
	{	
		case ADD_CARD_GROUP_SUCCESS:
		{
			let cardGroupMap = { ...state.cardGroupMap };
			cardGroupMap[action.cardGroup.key] = action.cardGroup;
			return { 
					...state,
					cardGroupMap : cardGroupMap
					  }
		}
		case ADD_CARD_SUCCESS:
		{
			return { 
					...state,
					cardGroupMap : {
									...state.cardGroupMap,
									[ action.cardGroupId ] : { 
																...state.cardGroupMap[ action.cardGroupId ], 
																cardMap : { 
																	...state.cardGroupMap[ action.cardGroupId ].cardMap,
																	[ action.card.key ] : action.card }
																}
				} 
			}
		}	
		case UPDATE_CARD:
		{
			let cardGroupId = action.cardGroupId;
			return {
					...state, 
					cardGroupMap : {
								...state.cardGroupMap,
								[cardGroupId] : {
													...state.cardGroupMap[ cardGroupId ], 
													cardMap : {
																...state.cardGroupMap[ cardGroupId ].cardMap,
																[ action.card.key ] : action.card 
															}
													}
									}
					}
		}
		case MOVE_CARD:
		{
			let oldCardGroupId = action.oldCardGroupId;
			let newCardGroupId = action.newCardGroupId;
			let cardId = action.cardId;
			let cardGroupMap = { ...state.cardGroupMap };
			let oldCardGroup = cardGroupMap[oldCardGroupId];
			let card = oldCardGroup.cardMap[cardId];
			let newCardGroup = cardGroupMap[newCardGroupId];
			newCardGroup.cardMap[cardId] = card;
			delete oldCardGroup.cardMap[cardId];
			return {
					...state,
					cardGroupMap : {
									...state.cardGroupMap,
									[oldCardGroup.key] : oldCardGroup,
									[newCardGroup.key] : newCardGroup
									}
			}
		}
		case UPDATE_CARD_GROUP:
		{
			return {
						...state,
						cardGroupMap : {
											...state.cardGroupMap,
											[action.cardGroup.key]: action.cardGroup
										}
			}
		}
	}
	return state;
};

export default CardsReducer;
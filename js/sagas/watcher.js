import { takeLatest } from 'redux-saga/effects'
import * as CardSagas from "./CardSagas";
import { ADD_CARD } from '../Actions/CardActions'
import { ADD_CARD_GROUP } from '../Actions/CardGroupActions';
export function* addCardSaga()
{
	yield takeLatest( ADD_CARD , CardSagas.addCards);
}
export function* addCardGroupSaga()
{
	yield takeLatest( ADD_CARD_GROUP , CardSagas.addCardsGroup);
}

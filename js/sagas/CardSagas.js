import { call, put } from 'redux-saga/effects'
import * as CardActions from '../Actions/CardActions'
import * as CardGroupActions from '../Actions/CardGroupActions'
export function* addCards( request )
{
    yield put(CardActions.addCardSuccess( request.cardGroupId, request.card));
}
export function* addCardsGroup(request)
{
    yield put(CardGroupActions.addCardGroupSuccess(request.cardGroup))
}
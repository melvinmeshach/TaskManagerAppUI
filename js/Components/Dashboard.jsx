import React , { Component  } from 'react';
import ReactDom from 'react-dom';
import CardGroup from './CardGroup.jsx';
import { connect } from 'react-redux'
import * as CardGroupActions from '../Actions/CardGroupActions';
import { createKey, getDefaultCards } from '../Utility';

@connect( (state) => ({ CardReducer : state.CardReducer }) )
class Dashboard extends Component
{
    constructor()
    {
        super();
        this.addCardGroup = this.addCardGroup.bind(this);
    }
    addCardGroup()
    {
        let cardGroupMap = this.props.CardReducer.cardGroupMap;
        let cardsGroupLength = Object.keys(cardGroupMap).length;
       

        let cardGroup = {
            key : createKey(),
            cardMap : getDefaultCards(),
            name : "group" + ( cardsGroupLength + 1 )
        }
        this.props.dispatch(CardGroupActions.addCardGroupRequest(cardGroup));
    }
    render()
    {
        let toRenderCardGroups = [];
        let cardGroupMap = this.props.CardReducer.cardGroupMap;
        for(let key in cardGroupMap)
            toRenderCardGroups.push(<CardGroup key={key} cardGroup={cardGroupMap[key]} />)
        return(<div className="dashboard">
                    { toRenderCardGroups }                    
                    <button className="add-icon" onClick={this.addCardGroup}>Add Card Group</button>
                </div>);
    }
}
export default Dashboard;
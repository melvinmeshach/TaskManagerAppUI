import React , { Component  } from 'react';
import ReactDom from 'react-dom';
import Card from './Card.jsx'
import { connect } from 'react-redux'
import * as CardActions from '../Actions/CardActions';
import * as CardGroupActions from '../Actions/CardGroupActions';
import { createKey } from '../Utility';

@connect( (state) => ({ CardReducer : state.CardReducer }) )
class CardGroup extends Component
{
    constructor()
    {
        super();
        this.addCard = this.addCard.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.updateCardGroup = this.updateCardGroup.bind(this);
        this.state = {
                        cardGroup : { 
                                        name : '' 
                                    }
                    }
    }
    componentWillMount()
    {
        this.setLocalState(this.props);
    }
    componentWillReceiveProps(nextProps)
    {
        this.setLocalState(nextProps);
    }
    setLocalState(props)
    {
        this.setState({...this.state, cardGroup : props.cardGroup})
    }
    addCard()
    {
        let cardGroupId = this.state.cardGroup.key;
        let cardGroup = this.state.cardGroup;
        let cardsLength = Object.keys(cardGroup.cardMap).length;
        let card = {key: createKey(), title: "title"+(cardsLength+1), description:"description"+(cardsLength+1)}
        this.props.dispatch(CardActions.addCard(cardGroupId, card));
    }

    onNameChangeHandler(e)
    {
        this.setState({ ...this.state, 
                        cardGroup : {
                            ...this.state.cardGroup,
                            name : e.target.value
                        }
                    });
    }
    updateCardGroup()
    {
        this.props.dispatch(CardGroupActions.updateCardGroup(this.state.cardGroup));
    }
    onDragOver(e)
    {
        e.preventDefault();
    }
    onDrop(e)
    {
        let cardId = e.dataTransfer.getData("cardId");
        let oldCardGroupId = e.dataTransfer.getData("oldCardGroupId");
        let newCardGroupId = this.state.cardGroup.key;
        if( oldCardGroupId != newCardGroupId )
            this.props.dispatch(CardActions.moveCardToAnotherGroup(cardId, oldCardGroupId, newCardGroupId));
    }
    render()
    {
        let toRender = [];
        
        let cardMap = this.state.cardGroup.cardMap;
        for( let key in cardMap )
        {
            let card = cardMap[key];
            toRender.push(<Card key={key} card={card} cardGroupId={this.state.cardGroup.key}/>)
        }
        toRender.push(<button className="add-icon" key="button" onClick={this.addCard}>Add Card</button>)
        return <div className="card-group" onDragOver={this.onDragOver} onDrop={this.onDrop}>
                    <input type="text" value={this.state.cardGroup.name} onChange={this.onNameChangeHandler} onBlur={this.updateCardGroup}/>
                    {toRender}
                </div>;
    }
}
export default CardGroup;
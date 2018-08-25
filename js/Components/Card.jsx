import React , { Component  } from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux'
import { updateCard } from '../Actions/CardActions';


@connect( (state) => ({ CardReducer : state.CardReducer }) )
class Card extends Component
{
    constructor()
    {
        super();
        this.state = {
                        cardGroupId : ''
,                        card : {
                                title : '',
                                description : ''
                        }
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.setLocalState = this.setLocalState.bind(this);
        this.updateCard= this.updateCard.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
    }
    componentWillMount()
    {
        this.setLocalState(this.props);
    }
    componentWillReceiveProps(nextProps)
    {
        this.setLocalState(nextProps)
    }
    setLocalState(props)
    {
        this.setState({  ...this.state,
                        card : { 
                                ...props.card
                             }, 
                        cardGroupId : props.cardGroupId 
                    });
    }
    onChangeHandler(e)
    {
        this.setState({...this.state, card : { ...this.state.card, title : this.refs.title.value, description : this.refs.description.value}});
    }
    updateCard()
    {
        if( this.props.card.title != this.state.card.title || this.props.card.description != this.state.card.description )
            this.props.dispatch(updateCard(this.state.cardGroupId, this.state.card));
    }
    onDragStart(e)
    {
        e.dataTransfer.setData('cardId', this.state.card.key);
        e.dataTransfer.setData('oldCardGroupId', this.state.cardGroupId);
    }
    render()
    {
        return(<div className="card" draggable={true} onDragStart={this.onDragStart}>
                    <input ref="title" type="text" value={this.state.card.title} onChange={this.onChangeHandler} onBlur={this.updateCard} />
                    <input ref="description" type="text" value={this.state.card.description} onChange={this.onChangeHandler} onBlur={this.updateCard}/>
                </div>)
    }
}
export default Card;
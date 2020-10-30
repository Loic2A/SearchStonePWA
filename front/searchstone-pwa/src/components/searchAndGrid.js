import React from "react";

export default class grid extends React.Component{

    state = {
        cardList: []
    };

    addCardToList = (card) => {
        this.setState({
            cardList: [card, ...this.state.cardList]
        });
    };

    render(){
        return (
            <div>
                <Sidebar onSubmit={this.addCardToList}/>
                {JSON.stringify(this.state.cardList)}
            </div>
        );
    }
}
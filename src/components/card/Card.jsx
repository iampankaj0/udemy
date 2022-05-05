import React, { Component } from 'react';
import './card.css';

export default class Card extends Component {
    render() {
        const { id, name, email } = this.props.data;
        return (
            <div className="card-container" key={id}>
                <img src={`https://robohash.org/${id}?set=set2`} alt={`monster ${name}`} />
                <h2> {name} </h2>
                <p> {email} </p>
            </div>
        )
    }
}

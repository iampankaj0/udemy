import React, { Component } from 'react';
import './cards.css';

export default class Cards extends Component {
    render() {
        const { monster } = this.props;
        console.log(this.props)
        return (
            <div className='card-list'>
                {
                    monster.map((data) => {
                        return (
                            <div className="card-container" key={data.id}>
                                <img src={`https://robohash.org/${data.id}?set=set2`} alt={`monster ${data.name}`} />
                                <h2> {data.name} </h2>
                                <p> {data.email} </p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

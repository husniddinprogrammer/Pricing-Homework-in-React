import React, { Component } from 'react';
import "./Card.css";

export default class Card extends Component {
    render() {
        return (
            <div className="card text-center col-3">
                <div class="card-header"><h2 className='fw-normal'>{this.props.name}</h2></div>
                <div class="card-body">
                    <h2 class="card-title">${this.props.price} / mo</h2>
                    <p class="card-text w-75 m-auto p-3">{this.props.description}</p>
                    <a href={this.props.link} class="btn btn-primary p-2">Get Started</a>
                </div>
            </div>
        )
    }
}

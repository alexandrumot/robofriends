import React from 'react';
import './Card.css';

// const colors = ['yellow', 'green', 'blue', 'red', 'pink'];
const Card = (props) => {
    return (
        <div className="bg-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
            <div className="img-wrapper">
                <img src={`https://robohash.org/${props.id}?200x200`} alt="robot"></img>
            </div>
            <div>
                <h2 className="tc">{props.name}</h2>
                <p className="tc">{props.email}</p>
            </div>
        </div>
    );
}

export default Card;
import React from 'react';

function Card({ name, id, email }) {
    return (
        <div className='bg-light-green tc dib br3 pa3 ma2 bw2 grow shadow-5'>
            <img alt='robo' src={`https://robohash.org/${id + name}?size=200x200`} />
            <div>
                <h4>{name}</h4>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
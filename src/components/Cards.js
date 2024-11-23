import React from 'react';

const Cards = ({name, image, description}) => {
    return(
        <div className="cards">
            <div className="cards__img image--background" style={{backgroundImage: `url(${image})`}}></div>
            <div className="cards__content">
                <span className="cards__title text--lead">
                    {name}
                </span>
                <span class="cards__description text--body">
                    {description}
                </span>
            </div>
        </div>       
    )
}

export default Cards;
import React from "react";

const CardTeam = ({image, name, description}) => {
    return(
        <div className="cardteam">
            <div className="cardteam__img image--background" style={{backgroundImage: `url(${image})`}}>
                <span className="cardteam__content">
                    <span className="cardteam__title text--small">
                        {name}
                    </span>
                    <span class="cardteam__description text--small">
                        {description}
                    </span>
                </span>
            </div>
        </div>       
    )
}

export default CardTeam;
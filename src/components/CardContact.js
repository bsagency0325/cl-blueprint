import React from 'react';


const CardContact = ({icon, title, description}) => {
    return(
        <div className="cardcontact">
            <div className="cardcontact__container">
                <div class="cardcontact__content">
                    <span className="cardcontact__iconcontent">
                        {icon}
                    </span>
                    <span className="cardcontact__title text--lead">
                        {title}
                    </span>
                    <span class="cardcontact__description text--body">
                        {description}
                    </span>
                </div>
            </div>
        </div>       
    )
}

export default CardContact;
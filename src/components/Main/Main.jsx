import React from "react";

export const Main = ({content}) => {

    const likeometer = content.like ? 'Fuá, me encanta' : 'Meh, decepcionante';

    return (
        <div className="main">
            {content.text}
            <button >{likeometer}</button>
        </div>
    )
}
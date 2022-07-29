import React from "react";

export const Main = ({content, handleToggle}) => {
    
    const likeometer = content.like ? 'Fuá, me encanta' : 'Meh, decepcionante';

    return (
        <div className="main">

            {content.text}

            <button onClick={handleToggle} >{likeometer}</button>
        </div>
    )
}
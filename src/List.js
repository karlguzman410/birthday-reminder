import React from 'react'

export const List = ({ people }) => {
    return (
        <>
            {people.map((person) => {
                const { id, name, age, image } = person
                return <article key={id} className="person">
                    <img src={image} alt={name} />
                    <div>
                        <h5>{name}</h5>
                        <p>{age} years young today!</p>
                    </div>
                </article>
            })}
        </>
    )
}


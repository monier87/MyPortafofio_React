import React from 'react'

const ExperienceItem = ({ nombre, descripcion }) => {
    return (
        <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
            <li>
                <div />
                <p>
                    <span>{nombre}</span>
                </p>
                <p>{descripcion}</p>

            </li>
        </ol>
    )
}

export default ExperienceItem
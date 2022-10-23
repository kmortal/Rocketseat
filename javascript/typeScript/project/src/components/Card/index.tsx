import React from 'react'
import './styles.css'

export type CardProps = {
    name: string,
    time: string
}

export function Card(props: CardProps){
    return (
        <section>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </section>
    )
}
import './styles.css'


export function Card(props){
    return (
        <section>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </section>
    )
}
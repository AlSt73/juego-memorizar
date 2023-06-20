
// eslint-disable-next-line react/prop-types
const Counter = ({ counter, counterTry }) => {
    return (
        <section className="counter-container">
            <div className="counter">
                <span>Aciertos:</span>
                <span>{counter}</span>

                <span>Intentos:</span>
                <span>{counterTry}</span>
            </div>
        </section>
    )
}

export default Counter
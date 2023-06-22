import aciertos from '../assets/background/aciertos.png'
import life from '../assets/background/try.png'
import nextLvl from '../assets/background/lvl.png'


// eslint-disable-next-line react/prop-types
const Counter = ({ counter, counterTry, lvl }) => {
    return (
        <section className="counter-container">
            <div className="counter">
                <span >
                    <img src={aciertos} alt="" />
                    Aciertos {counter}
                </span>


                <span>
                    <img src={life} alt="" />
                    Intentos {counterTry}
                </span>


                <span>
                    <img src={nextLvl} alt="" />
                    Nivel <br/> {lvl + 1}
                </span>

            </div>
        </section>
    )
}

export default Counter
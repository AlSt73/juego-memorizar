import { useEffect, useContext, useState } from 'react'
import '../assets/styles/style.css';
import { DataContext } from '../hooks/useContext';

import GameLvl from './GameLvl';

const Board = () => {
    const { imgs, setMax, max, data, setNext, next } = useContext(DataContext);

    const [selectedImg, setSelectedImg] = useState({ name: null, i: null });
    const [counter, setCounter] = useState(0);
    const [counterTry, setCounterTry] = useState(max);
    const [currentTry, setCurrentTry] = useState(0);
    const [lvl, setLvl] = useState(0);
    const [currentLvl, setCurrentLvl] = useState(0);
    const [currentMax, setCurrentMax] = useState(0);

    //const [next, setNext] = useState(false);


    useEffect(() => {
        data(max);

    }, [currentMax]);



    const nextLvl = () => {
        setSelectedImg({ name: null, i: null })

        let newlvl = lvl + 1;
        let newMax = max + 1;
        setCurrentLvl(newlvl);
        setCurrentMax(newMax);
        setLvl(newlvl);
        setMax(newMax);

        setCounter(0);
        setCounterTry(max)


        data(newMax);
        console.log("nuevo maximo -->" + newMax)
        console.log("nivel -->" + newlvl)
        console.log("vidas -->" + counterTry)
        console.log(next);

        setNext(next);
    }


    return (
        <>
            {counter != (max - 1) &&

                <GameLvl
                    imgs={imgs}
                    selectedImg={selectedImg}
                    counter={counter}
                    currentLvl={currentLvl}
                    lvl={lvl}
                    counterTry={counterTry}
                    currentTry={currentTry}
                    setCurrentTry={setCurrentTry}
                    setCounter={setCounter}
                    setSelectedImg={setSelectedImg}
                    setCounterTry={setCounterTry}

                />

            }
            {counter == (max - 1) && max < 11 &&
                <>
                    <div className="msg-container">
                        <div>
                            <img src="./src/assets/background/exit.png" alt="Exit" />
                            <span className="happy-msg">
                                Felicidades has logrado escapar 😁😍🥳
                            </span>
                        </div>
                    </div>
                    <div className="btn-play">

                        <button className="btn-next-lvl" onClick={nextLvl}>Siguiente Nivel</button>
                    </div>
                </>
            }
            {
                max == 11 &&
                <>
                    <div className="msg-container">
                        <div>
                            <img src="./src/assets/background/exit.png" alt="Exit" />
                            <span className="happy-msg">
                                Felicidades has superado todos los niveles 😁😍🥳
                            </span>
                        </div>
                    </div>
                    <div className="btn-play">
                        <button className="btn-next-lvl" onClick={()=>location.reload()}>Volver al menu</button>
                    </div>
                </>
            }
        </>
    )

}

export default Board
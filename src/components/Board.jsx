import { useEffect, useContext, useState } from 'react'
import '../assets/styles/style.css';
import { DataContext } from '../hooks/useContext';

import GameLvl from './GameLvl';

const Board = () => {

    const [selectedImg, setSelectedImg] = useState({ name: null, i: null });

    const [counter, setCounter] = useState(0);
    const [counterTry, setCounterTry] = useState(5);
    const [lvl, setLvl] = useState(0);
    const [currentLvl, setCurrentLvl] = useState(0);
    const [currentMax, setCurrentMax] = useState(0);

    //const [next, setNext] = useState(false);

    const { imgs, setMax, max, data, setNext, next} = useContext(DataContext);


    const nextLvl = () => {
        setSelectedImg({ name: null, i: null })

        let newlvl = lvl + 1;
        let newMax = max + 1;
        setCurrentLvl(newlvl);
        setCurrentMax(newMax);
        setLvl(newlvl);
        setMax(newMax);

        setCounter(0);
        let c = counterTry + 1;
        setCounterTry(c);

        data(newMax);
        console.log("nuevo maximo -->" + newMax)
        console.log("nivel -->" + newlvl)
        console.log(next);

        setNext(next);
    }
    useEffect(() => {
        data(max);
    }, [currentMax]);

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
                    setCounter={setCounter}
                    setSelectedImg={setSelectedImg}
                    setCounterTry={setCounterTry}

                />

            }
            {counter == (max - 1) &&
                <>
                    <div className="counter-container">
                        <span>
                            Felicidades😁😍🥳
                        </span>
                    </div>
                    <div className="btn-play">

                        <button className="btn-next-lvl" onClick={nextLvl}>Siguiente Nivel</button>
                    </div>
                </>
            }
        </>
    )
}

export default Board
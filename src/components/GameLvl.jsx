import { useContext, useEffect, useRef, useState } from 'react';
import Counter from './Counter';
import { DataContext } from '../hooks/useContext';

// eslint-disable-next-line react/prop-types
const GameLvl = ({ counterTry, selectedImg, setSelectedImg, setCounterTry, setCounter, counter, currentLvl, lvl }) => {
    const [isAnimated, setIsAnimated] = useState(false);

    const img = useRef([]);
    const img2 = useRef([]);
    const { imgs, play, max, randomPosition, random } = useContext(DataContext);

    const showCard = (e, nameUrl, index) => {

        try {
            const currentImg = e.target;
            // eslint-disable-next-line react/prop-types
            const { name, i } = selectedImg;
            if (name === null && i === null) {
                setSelectedImg({ name: nameUrl, i: index })
                currentImg.classList.toggle('showImg');
                currentImg.classList.toggle('img');
                //console.log(currentImg);
            } else {
                setIsAnimated(true);
                currentImg.classList.toggle('showImg');
                currentImg.classList.toggle('img');
                if (name === nameUrl && index != i) {
                    console.log("son iguales!")
                    img.current[i].classList.add('readOnly');
                    img.current[index].classList.add('readOnly');
                    setCounter(counter + 1);
                    setSelectedImg({ name: null, i: null })
                    setIsAnimated(false);
                } else {
                    setIsAnimated(true);
                    setCounterTry(counterTry - 1);

                    setTimeout(() => {
                        currentImg.classList.add('img');
                        currentImg.classList.remove('showImg');
                        img2.current[i].classList.add('img');
                        img2.current[i].classList.remove('showImg');
                        setSelectedImg({ name: null, i: null })
                        setIsAnimated(false)

                    }, 400);

                }
            }
            // if (name == null) {
            //     console.log("1.-" + name);
            // }
            // console.log("2.-" + nameUrl);
        } catch (e) {
            console.log(e);
        }

    }

    const resetBoard = () => {
        setIsAnimated(false);
        setCounter(0);
        setCounterTry(5);
        setSelectedImg({ name: null, i: null })
        randomPosition();
    }

    useEffect(() => {
        randomPosition();
    }, [imgs, currentLvl]);

    return (
        <>
            {play && counter < max && counterTry > 0 && lvl === currentLvl ?
                <>
                    <Counter counter={counter} counterTry={counterTry} />
                    <section className="board" >
                        {
                            random.map((e, i) => (
                                <div className='card' key={i} ref={(ref) => img.current[i] = ref} onClick={(e2) => !isAnimated ? showCard(e2, e, i) : null} >
                                    <div className="mask" >
                                        <img src={e} className="img" alt="Imagen" ref={(ref) => img2.current[i] = ref} />
                                    </div>
                                </div>
                            ))
                        }
                    </section>
                </>
                : play && counterTry == 0 && lvl === currentLvl &&
                <>
                    <div className="btn-play">
                        <button onClick={resetBoard}>Reiniciar</button>
                    </div>
                    <h2 className="counter-container">
                        Se te acabaron los intentos vuelve a probar suerte!
                    </h2>
                </>}
        </>
    )
}

export default GameLvl
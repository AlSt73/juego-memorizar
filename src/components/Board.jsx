import { useEffect, useContext, useState, useRef } from 'react'
import '../assets/styles/style.css';
import { DataContext } from '../hooks/useContext';
import Counter from './Counter';

const Board = () => {
    const [randomImgs, setRandomImgs] = useState([]);

    const [selectedImg, setSelectedImg] = useState({ name: null, i: null });
    const [isAnimated, setIsAnimated] = useState(false);
    const [counter, setCounter] = useState(0);
    const [counterTry, setCounterTry] = useState(11);
    const [lvl, setLvl] = useState(2);



    const img = useRef([]);
    const img2 = useRef([]);
    const { imgs, setImgs, setPlay, play, setMax, max, data } = useContext(DataContext);

    const randomPosition = () => {
        const randomPosition = imgs.sort(() => Math.random() - 0.5)
        setRandomImgs(randomPosition);

    }
    const showCard = (e, nameUrl, index) => {

        const currentImg = e.target;
        let imgSelected = img2.current[index];

        imgSelected = currentImg;


        if (selectedImg.name == null) {
            setSelectedImg({ name: nameUrl, i: index })
            imgSelected.classList.add('showImg');
            imgSelected.classList.remove('img');
        } else {
            setIsAnimated(true);
            imgSelected.classList.add('showImg');
            imgSelected.classList.remove('img');
            if (selectedImg.name === nameUrl) {
                console.log("son iguales!")
                img.current[selectedImg.i].classList.add('readOnly');
                img.current[index].classList.add('readOnly');
                setCounter(counter + 1);
                setSelectedImg({ name: null, i: null })
            } else {
                setIsAnimated(true);
                setCounterTry(counterTry - 1);
                setTimeout(() => {
                    imgSelected.classList.add('img');
                    imgSelected.classList.remove('showImg');
                    img2.current[selectedImg.i].classList.add('img');
                    img2.current[selectedImg.i].classList.remove('showImg');
                    setSelectedImg({ name: null, i: null })
                    setIsAnimated(false)
                }, 500);

            }
        }
        if (selectedImg.name != null) {

            console.log("1.-" + selectedImg.name);
        }
        console.log("2.-" + nameUrl);




    }

    const resetBoard = () => {
        setPlay(!play);
        setCounter(0);
        setCounterTry(5);
        setSelectedImg({ name: null, i: null })
        randomPosition();
    }
    const nextLvl = (e) => {
        setSelectedImg({ name: null, i: null })
        setMax(max + 2);
        setCounter(0);
        setCounterTry(15);

        setLvl(e);
        data();
        setImgs(imgs)

        console.log("nivel -->" + lvl)
    }


    useEffect(() => {
        randomPosition();


    }, [randomImgs, lvl]);

    useEffect(() => {
        data();
    }, [max]);


    return (
        <>
            {
                play && counter < max && counterTry > 0 && lvl === 1 ?
                    <>
                        <Counter counter={counter} counterTry={counterTry} />
                        <section className="board" >

                            {
                                randomImgs.map((e, i) => (
                                    <div className='card' key={i} ref={(ref) => img.current[i] = ref} onClick={(e2) => showCard(e2, e, i)} >
                                        <div className="mask" >
                                            <img src={e} className="img" alt="Imagen" ref={(ref) => img2.current[i] = ref} />
                                        </div>
                                    </div>
                                ))
                            }
                        </section>
                    </>
                    : play && counterTry == 0 && lvl === 1 &&
                    <>
                        <div className="btn-play">
                            <button onClick={resetBoard}>Reiniciar</button>
                        </div>
                        <h2 className="counter-container">
                            Se te acabaron los intentos vuelve a probar suerte!
                        </h2>
                    </>
            }
            {
                play && counter < max && counterTry > 0 && lvl === 2 ?
                    <>
                        <Counter counter={counter} counterTry={counterTry} />
                        <section className="board" >

                            {
                                randomImgs.map((e, i) => (
                                    <div className='card' key={i} ref={(ref) => img.current[i] = ref} onClick={(e2) => showCard(e2, e, i)} >
                                        <div className="mask" >
                                            <img src={e} className="img" alt="Imagen" ref={(ref) => img2.current[i] = ref} />
                                        </div>
                                    </div>
                                ))
                            }
                        </section>
                    </>
                    : play && counterTry == 0 && lvl === 2 &&
                    <>
                        <div className="btn-play">
                            <button onClick={resetBoard}>Reiniciar</button>
                        </div>
                        <h2 className="counter-container">
                            Se te acabaron los intentos vuelve a probar suerte!
                        </h2>
                    </>
            }
            {

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
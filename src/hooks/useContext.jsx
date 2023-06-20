import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types';

export const DataContext = createContext();

export const DataComponent = ({ children }) => {
    const [imgs, setImgs] = useState([]);
    const [random, setRandom] = useState([]);
    const [play, setPlay] = useState(false);
    const [next, setNext] = useState(false);
    const [max, setMax] = useState(4);

    const data = (quantityImg) => {
        const images = [];
        for (var i = 1; i < quantityImg; i++) {
            images.push('./src/assets/images/' + `img${i}.jpg`);
            images.push('./src/assets/images/' + `img${i}.jpg`);
        }

        setImgs(images);
        randomPosition();

    }

    const randomPosition = () => {
        let x =imgs.sort(() => Math.random() - 0.5);
        setRandom(x);
    }

    useEffect(() => {
        data(max);
    }, []);


    return (
        <DataContext.Provider value={{
            data,
            imgs,
            setImgs,
            play,
            setPlay,
            setMax,
            max,
            next,
            setNext,
            randomPosition,
            random
        }} >
            {children}
        </DataContext.Provider>
    )
}

DataComponent.propTypes = {
    children: PropTypes.node.isRequired
}
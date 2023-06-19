import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types';
//import addresImg from './../assets/images/';

export const DataContext = createContext();

export const DataComponent = ({ children }) => {
    const [imgs, setImgs] = useState([]);
    const [play, setPlay] = useState(false);
    const [max, setMax] = useState(7);

    const data = () => {
        const images = [];
        for (var i = 1; i < max; i++) {
            images.push('./src/assets/images/' + `img${i}.jpg`);
            images.push('./src/assets/images/' + `img${i}.jpg`);
        }
        setImgs(images);

    }

    useEffect(() => {
        data();
    }, []);
    useEffect(() => {
        data();
    }, [max]);





    return (
        <DataContext.Provider value={{
            data,
            imgs,
            setImgs,
            play,
            setPlay,
            setMax,
            max
        }} >
            {children}
        </DataContext.Provider>
    )
}

DataComponent.propTypes = {
    children: PropTypes.node.isRequired
}
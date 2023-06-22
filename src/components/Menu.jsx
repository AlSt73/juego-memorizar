
import '../assets/styles/style.css';
import { DataContext } from '../hooks/useContext';
import { useContext } from 'react';
import icoPlay from '../assets/background/play.jpg';


function Menu() {

    const { play, setPlay } = useContext(DataContext);



    return (
        <>
            <section className="menu-fake">
                {!play &&

                    <div className="btn-play">

                        <button onClick={() => setPlay(!play)}><img src={icoPlay} alt="play" />Play</button>
                    </div>

                }
            </section>


        </>
    )
}

export default Menu;

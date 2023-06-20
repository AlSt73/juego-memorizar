
import '../assets/styles/style.css';
import { DataContext } from '../hooks/useContext';
import { useContext } from 'react';



function Menu() {

    const { play, setPlay } = useContext(DataContext);



    return (
        <>
            <section className="menu-fake">
                {!play &&

                    <div className="btn-play">
                        <button onClick={() => setPlay(!play)}>Jugar</button>
                    </div>

                }
            </section>


        </>
    )
}

export default Menu;

import './style.css';
import {Link} from 'react-router-dom';
export default function Food(){
    return(
        <section className="food">
            <div className="menu">
            <div><ul>
                <li className="li"><Link to="/Should">What should/shoudn't i feed my cat?</Link></li>
                <li className="li"><Link to="/recipes">Some recipes</Link></li>
            </ul></div>
            <div className="back"><Link to="/" className="submit-button">back</Link></div>
        </div>
        </section>
    );
}
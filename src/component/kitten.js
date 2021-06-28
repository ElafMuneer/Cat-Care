import './style.css';
import {Link} from 'react-router-dom';
export default function Kitten(){
    return(
        <section className="kitten">
            <div className="menu">
            <div><ul>
                <li className="li"><Link to="/feed-kitten">What should I feed my kitten?</Link></li>
                <li className="li"><Link to="/New-kitten">How do I care for my new kitten?</Link></li>
                <li className="li"><Link to="/Mother">How do I care for newborn kittens and their mother?</Link></li>
            </ul></div>
            <div className="back"><Link to="/" className="submit-button">back</Link></div>
        </div>
        </section>
        
    );
}
import './style.css';
import {Link} from 'react-router-dom';
export default function Behavior(){
    return(
        <section className="behavior">
            <div className="menu">
            <div><ul>
                <li className="li-2"><Link to="/scratching">How do I stop my cat from scratching the furniture?</Link></li>
                <li className="li-2"><Link to="/towards-other-cat">My cat is being aggressive towards my other cat, what should I do?</Link></li>
                <li className="li-2"><Link to="/hug">Is it a good idea to hug my cat?</Link></li>
            </ul></div>
            <div className="back"><Link to="/" className="submit-button">back</Link></div>
        </div>
        </section>
    );
}
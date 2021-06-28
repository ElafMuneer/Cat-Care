import './style.css';
import {Link} from 'react-router-dom';
export default function More(){
    return(
        <section className="more">
            <div className="menu">
            <div><ul>
                <li className="li-2"><Link to="/newCat">Should I get another cat?</Link></li>
                <li className="li-2"><Link to="/newHome">How can i help my cat adjust to a new home?</Link></li>
            </ul></div>
            <div className="back"><Link to="/" className="submit-button">back</Link></div>
        </div>
        </section>
    );
}
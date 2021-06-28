import './style.css';
import {Link} from 'react-router-dom';
export default function Health(){
    return(
        <section className="health">
            <div className="menu">
            <div><ul>
            <li className="li"><Link to="/children">Is it safe to have a cat around my children? What diseases can children catch from a cat?</Link></li>
                <li className="li"><Link to="/flu">What is cat flu and how is it managed?</Link></li>
                <li className="li"><Link to="/teeth">How should I take care of my cat’s teeth?</Link></li>
            </ul></div>
            <div className="back"><Link to="/" className="submit-button">back</Link></div>
        </div>
        </section> 
          );
        }
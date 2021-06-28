import './style.css';
import {Link} from 'react-router-dom';
export default function Vat(){
    return(
        <section className="vat">
            <div className="menu">
            <div><ul>
                <li className="lis"><a href="https://www.google.com/maps/search/Veterinary+Clinic+in+Mosul/@36.3772045,43.1392062,15z" className="submit-button">Veterinary Clinic in Mosul</a></li>
                <li className="lis"><a href="https://www.google.com/maps/search/Veterinary+Clinic+in+Baghdad/@33.2934762,44.3123079,12z/data=!3m1!4b1" className="submit-button">Veterinary Clinic in Baghdad</a></li>
                <li className="lis"><a href="https://www.google.com/maps/search/Veterinary+Clinic+in+duhok/@36.2081892,43.0127147,8z/data=!3m1!4b1" className="submit-button">Veterinary Clinic in Duhok</a></li>
                <li className="lis"><a href="https://www.google.com/maps/search/Veterinary+Clinic+in+erbil/@36.2112075,43.9681936,12.95z" className="submit-button">Veterinary Clinic in Erbil</a></li>
                <li className="lis"><a href="https://www.google.com/maps/search/Veterinary+Clinic+in+basra/@30.4754292,47.6390072,11z/data=!3m1!4b1" className="submit-button">Veterinary Clinic in Basra</a></li>
            </ul></div>
            <div className="back"><Link to="/" className="submit-button">back</Link></div>
        </div>
        </section>
    );
}
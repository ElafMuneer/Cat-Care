import {Link} from 'react-router-dom';
import Logo from '../img/cat.png';
import './main.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';


export default function Main(){
    return(<section className="main">
        <div className="bar">
             <img src={Logo} alt="Logo"/>
             <h1>Cat Care</h1>
         </div>
         <div className="text-menu">
         <div className="text">
             <div><h3>Do you to know anything about cats ??<br/>if you are ,then you are in the right place here you can found anything about cats such health,care,food ....etc</h3></div>
             <div className="social">
                            <a href="https://www.facebook.com/Elaf.Muneer" ><FacebookIcon fontSize="large"/></a>
                            <a href="https://www.instagram.com/elaf.al_dabagh" ><InstagramIcon fontSize="large"/></a>
                            <a href="https://github.com/ElafMuneer/" ><GitHubIcon fontSize="large"/></a>
                        </div>
         </div>
         <div className="menu">
             <div className="menuRow" >
                 <Link to="/Kitten" className="submit-button">Kitten</Link>
                 <Link to="/behavior" className="submit-button">Behavior</Link>
              </div>
              <div className="menuRow">
              <Link to="/health" className="submit-button">Health Issuse</Link>
              <Link to="/food" className="submit-button">Food</Link>
              </div>
              <div className="menuRow">
                 <Link to="/Veterinary Clinic" className="submit-button">Veterinary Clinic</Link>
                 <Link to="/more" className="submit-button">More</Link>
              </div>
         </div>
         
     </div>
    </section>)
}
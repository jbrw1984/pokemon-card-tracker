import { Link } from 'react-router-dom';
import './BackToResult.css';


const BackToResult = () => {
    return (
        <p className="home-link-paragraph">
            <Link className="link-to-home" to="/">BACK TO RESULTS</Link>
        </p>
    )
}

export default BackToResult; 
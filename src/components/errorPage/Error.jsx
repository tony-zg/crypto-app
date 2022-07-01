import { Link } from 'react-router-dom';
import './error.css';
import errorImg from '../../assets/404.jpg';
import { FaSpinner } from 'react-icons/fa';

const Error = () => {
  return (
    <div className="error-container">
      {errorImg ? <img src={errorImg} alt="error" /> : <FaSpinner />}
      <p>Oops...! 404 Page Not Found</p>
      <Link className="link" to="/">
        Click here to go back
      </Link>
    </div>
  );
};

export default Error;

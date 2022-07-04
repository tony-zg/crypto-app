import { Link } from 'react-router-dom';
import styles from './error.module.scss';
import errorImg from '../../assets/404.jpg';
import { FaSpinner } from 'react-icons/fa';

const Error = () => {
  return (
    <div className={styles.error__container}>
      {errorImg ? <img src={errorImg} alt="error" /> : <FaSpinner />}
      <p>Oops...! 404 Page Not Found</p>
      <Link className={styles.link} to="/">
        Click here to go back
      </Link>
    </div>
  );
};

export default Error;

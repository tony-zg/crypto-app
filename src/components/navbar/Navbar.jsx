import styles from './navBar.module.scss';
import { FaCoins } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Link to="/">
      <div className={styles.navbar__container}>
        <FaCoins className={styles.icon} />
        <h1>
          Coin <span className={styles.purple}>Search</span>
        </h1>
      </div>
    </Link>
  );
};

export default Navbar;

import Link from 'next/link';
import NavBar from '../navbar/NavBar';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>jus recondo</h1>
      </Link>
      <NavBar />
    </header>
  );
};

export default Header;

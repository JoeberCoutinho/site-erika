import { Link } from "react-router-dom";
import Container from "./Container";

import styles from './Navbar.module.css';
import logo from '../img/fono.png';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" className={styles.img}/>
        </Link> 
        <h3 className={styles.h3}>DRA ERIKA P COUTINHO<h4 className={styles.h4}>CRF a 62608</h4></h3>
        <p></p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">HOME</Link>
          </li>
          <li className={styles.item}>
            <Link to="/sobremim">SOBRE MIM</Link>
          </li>
          <li className={styles.item}>
            <Link to="/atuacao">ATUAÇÃO</Link>
          </li>
          <li className={styles.item}>
            <Link to="/tratamento">TRATAMENTO</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contato">CONTATO</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Navbar;
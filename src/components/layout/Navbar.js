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
        <h3 className={styles.h3}>DRA ERIKA P COUTINHO<h4 className={styles.h4}>CRF a 6 2608</h4></h3>
        <p></p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">O QUE É A FONO?</Link>
          </li>
          <li className={styles.item}>
            <Link to="/sobremim">TESTE DA ORELINHA</Link>
          </li>
          <li className={styles.item}>
            <Link to="/atuacao">TESTE DA LINGUINHA</Link>
          </li>
          <li className={styles.item}>
            <Link to="/tratamento">CHUPETAS</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contato">DISFLUENCIA DE FALA</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Navbar;
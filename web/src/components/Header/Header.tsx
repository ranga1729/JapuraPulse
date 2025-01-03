import styles from './Header.module.scss'
import USJP from '../../assets/USJP.png'

function Header() {
  return <div className={styles.HeaderContainer}>
    <div className={styles.logoContainer}>
      <img src={USJP} />
    </div>

    <div className={styles.nameContainer}>
      <p className={styles.redLetters}>J'puraPulse</p>
      
    </div>

    <div className={styles.buttonContainer}>
      <button className={styles.register}>Register</button>
      <button className={styles.login}>Login</button>
    </div>

  </div>
}

export default Header;
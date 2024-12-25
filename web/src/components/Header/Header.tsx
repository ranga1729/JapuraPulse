import styles from './Header.module.css'
import User from '../../assets/user.svg'
import USJP from '../../assets/USJP.png'
import Search from '../../assets/search.svg'
import { useState } from 'react'

function Header() {
  const[searchTerm, setSearchTerm] = useState<string>('')

  return( 
    <>
      <div className={styles.HeaderContainer}>

        <div className={styles.logoContainer}>
          <p className={styles.logo_universityName}>J'Pura</p>
          <div className={styles.logo_secondTextContainer}>
            <p>N</p>
            <img src={USJP} className={styles.USJPLogo}/>
            <p>W</p>
          </div>
        </div>

        <div className={styles.searchContainer}>
          <div className={styles.searchBar}>
            <input type='text' placeholder='Search by Event name..' className={styles.searchInput} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <button type='submit' className={styles.searchButton}>
              <img src={Search}className={styles.searchIcon}/>
            </button>
          </div>
        </div>

        <div className={styles.registerButtonContainer}>
          <p>Register</p>
        </div>

        <div className={styles.loginButtonContainer}>
          <img src={User} className={styles.UserImage}></img>
          <p className={styles.sigingText}>Sign-In</p>
        </div>

      </div>
    </>
  )
}

export default Header;
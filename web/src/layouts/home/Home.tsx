import styles from './Home.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import EventItem from '../../components/Event/EventCard'

function Home() {
  return (
    <>
      <Header />
      <div className={styles.mainBanner}>
        <p className={styles.tagline}>What's happening at Japura ?</p>
      </div>

      <form className={styles.timeFilterContainer}>
        <input type="radio" id="all" name="timeFilter" value="all" className={styles.timeFilterOption}/>
        <label htmlFor="all" className={styles.timeFilterLabel}>All</label>
        <input type="radio" id="thisMonth" name="timeFilter" value="thisMonth" className={styles.timeFilterOption}/>
        <label htmlFor="thisMonth" className={styles.timeFilterLabel}>This Month</label>
        <input type="radio" id="nextMonth" name="timeFilter" value="nextMonth" className={styles.timeFilterOption}/>
        <label htmlFor="nextMonth" className={styles.timeFilterLabel}>Next Month</label>
      </form>

      <div className={styles.catalog}>
        <EventItem Title='SHAAN & SANKA LIVE' date='Dec, 24, 2024 : 7.00 am' venue='Hadawila Area' />
      </div>

      <Footer />
    </>
  )
}

export default Home;
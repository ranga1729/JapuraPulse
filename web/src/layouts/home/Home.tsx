import styles from './Home.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import search from '../../assets/search.svg'
import EventItem from '../../components/EventCard/EventCard';

function Home() {
  return <>
    <Header />
    <div className={styles.banner}>
      <p>What's New at Japura ?</p>

      <div className={styles.searchContainer}>
        <input type='text'/>
        <button>
          <img src={search}/>
        </button>
      </div>

      <form className={styles.timeFilterContainer}>
        <input type="radio" id="all" name="timeFilter" value="all" />
        <label htmlFor="all"> All </label>
        <input type="radio" id="thisMonth" name="timeFilter" value="thisMonth"/>
        <label htmlFor="thisMonth" > This Month </label>
        <input type="radio" id="nextMonth" name="timeFilter" value="nextMonth"/>
        <label htmlFor="nextMonth"> Next Month </label>
      </form>
    </div>

    <div className={styles.catalog}>
      <EventItem Title='SHAAN & SANKA LIVE' date='Dec, 24, 2024 : 7.00 am' venue='Hadawila Area' />
    </div>

    <Footer />
  </>
}

export default Home;
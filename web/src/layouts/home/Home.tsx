import { useEffect, useState } from 'react';
import styles from './Home.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import EventItem from '../../components/EventCard/EventCard';
import { timeFilterOptions } from '../../types/types';

function Home() {
  const[selectedTimeFilter, setSelectedTimeFilter] = useState<string>(timeFilterOptions.all)

  const handleTimeFilter = (e:string) => {
    setSelectedTimeFilter(e);
  }

  return <>
    <Header />
    <div className={styles.banner}>
      <p>What's New at Japura ?</p>

      <div className={styles.searchContainer}>
        <input type='text' placeholder='Event name...'/>
        <button>
          Search
        </button>
      </div>

      <form className={styles.timeFilterContainer} >
        <input type="radio" id="all" name="timeFilter" value={timeFilterOptions.all} onChange={(e) => handleTimeFilter(e.target.value)} checked={selectedTimeFilter === timeFilterOptions.all} />
        <label htmlFor="all"> All </label>
        <input type="radio" id="thisMonth" name="timeFilter" value={timeFilterOptions.thisMonth} onChange={(e) => handleTimeFilter(e.target.value)} checked={selectedTimeFilter === timeFilterOptions.thisMonth}/>
        <label htmlFor="thisMonth" > This Month </label>
        <input type="radio" id="nextMonth" name="timeFilter" value={timeFilterOptions.nextMonth} onChange={(e) => handleTimeFilter(e.target.value)} checked={selectedTimeFilter === timeFilterOptions.nextMonth}/>
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
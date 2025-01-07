import styles from './EventCard.module.scss'
import Image from '../../assets/event.jpg'
import calendar from '../../assets/calendar.svg'
import location from '../../assets/location.svg'
interface Props {
  thumbnailURL?:string;
  Title?:string;
  date?:string;
  venue?:string;
  isFree?:boolean;
  ticketPrice?:number;
}

function EventItem(props: Props) {
  return (
    <div className={styles.eventItemContainer}>
      <img src={Image} className={styles.eventThumbnail}/>
      <div className={styles.eventDetails}>
        <p className={styles.eventName}> {props.Title} </p>
        <div className={styles.eventDateTime}>
          <div className={styles.eventDetailsIconContainer}>
            <img src={calendar} className={styles.eventDetailsIcon}/>
          </div>
          <p className={styles.eventDetailsText}> {props.date} </p>
        </div>
        <div className={styles.venue}>
          <div className={styles.eventDetailsIconContainer}>
            <img src={location} className={styles.eventDetailsIcon}/>
          </div>
          <p className={styles.eventDetailsText}> {props.venue} </p>
        </div>
        <div className={styles.ticketPrice}>
          <p>1,500 LKR</p>
        </div>
      </div>
      <button className={styles.ticketBuyButton}> Buy Tickets</button>
    </div>
  )
}

export default EventItem;
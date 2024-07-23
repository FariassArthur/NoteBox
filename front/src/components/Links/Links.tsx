//css
import styles from './Links.module.scss';

//router
import { useLocation, Link } from 'react-router-dom'

const Links = () => {
  
  const location = useLocation()
  
  return (
    <div id={styles.links}>
      <ul className={styles.linksList}>
        <li className={location.pathname === '/' ? "bold" : ""}>
          <Link className={styles.link} to="/cards">Overview</Link>
        </li>
        <li className={location.pathname === '/calendar' ? "bold" : ""}>
          <Link className={styles.link} to="/calendar">Calendar</Link>
        </li>
        <li className={location.pathname === '/ToDo' ? "bold" : ""}>
          <Link className={styles.link} to="/ToDo">ToDo</Link>
        </li>
      </ul>
    </div>
  )
}

export default Links
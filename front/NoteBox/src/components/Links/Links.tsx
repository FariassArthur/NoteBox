//css
import '../styles/Links.sass'

//router
import { useLocation, Link } from 'react-router-dom'

const Links = () => {
  
  const location = useLocation()
  
  return (
    <div id="links">
      <ul className="links-list">
        <li className={location.pathname === '/' ? "bold" : ""}>
          <Link className='link' to="/cards">Overview</Link>
        </li>
        <li className={location.pathname === '/calendar' ? "bold" : ""}>
          <Link className='link' to="/calendar">Calendar</Link>
        </li>
        <li className={location.pathname === '/ToDo' ? "bold" : ""}>
          <Link className='link' to="/ToDo">ToDo</Link>
        </li>
      </ul>
    </div>
  )
}

export default Links

//css
import styles from './HeaderMain.module.scss'

const HeaderMain = () => {
  return (
    <div id={styles.headerMain}>
        <div className={styles.hFirst}>
            <h1>Object Name</h1>

            <h3>Subtype</h3>
        </div>
        
        <div>
            <h2>Introduction</h2>

            <p>Introduction about this object, whatever it might be.</p>
        </div>
    </div>
  )
}

export default HeaderMain
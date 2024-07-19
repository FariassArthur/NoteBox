//css
import '../styles/HeaderMain.sass'

const HeaderMain = () => {
  return (
    <div id="header-main">
        <div className='h-first'>
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
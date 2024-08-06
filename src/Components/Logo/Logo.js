import Tilt from 'react-parallax-tilt'
import './Logo.css'
import brain from './brain.png'

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        scale="1.2"
        className="Tilt br2 shadow-2 flex pa3"
        style={{
          height: '200px',
          width: '200px',
          backgroundColor: 'darkgreen',
        }}
      >
        <img alt="logo" src={brain}></img>
      </Tilt>
    </div>
  )
}
export default Logo

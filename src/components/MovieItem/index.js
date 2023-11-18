import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import 'reactjs-popup/dist/index.css'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div className="card">
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" className="url" />}
        className="pop-content"
      >
        {close => (
          <div className="main-container">
            <button
              className="button"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
              aria-label="close button"
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="player-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem

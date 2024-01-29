import {
  NoSavedVideosCon,
  NoSavedVideosCard,
  NoSavedVideosImg,
  NoSavedVideosHead,
  NoSavedVideosPara,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const NoSavedVideosFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <NoSavedVideosCon isDarkTheme={isDarkTheme}>
          <NoSavedVideosCard>
            <NoSavedVideosImg
              alt="no saved videos"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            />
            <NoSavedVideosHead isDarkTheme={isDarkTheme}>
              No saved videos found
            </NoSavedVideosHead>
            <NoSavedVideosPara isDarkTheme={isDarkTheme}>
              You can save your videos while watching them
            </NoSavedVideosPara>
          </NoSavedVideosCard>
        </NoSavedVideosCon>
      )
    }}
  </ThemeContext.Consumer>
)

export default NoSavedVideosFound

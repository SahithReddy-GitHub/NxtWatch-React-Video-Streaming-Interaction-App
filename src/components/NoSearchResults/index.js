import ThemeContext from '../../context/ThemeContext'

import {
  NoResultCon,
  NoResultImg,
  NoResultHead,
  NoResultPara,
  NoResultButton,
} from './styledComponents'

const NoSearchResults = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {onRetrySearch} = props

      const onRetry = () => {
        onRetrySearch()
      }

      return (
        <NoResultCon>
          <NoResultImg
            alt="no videos"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          />
          <NoResultHead isDarkTheme={isDarkTheme}>
            No Search results found
          </NoResultHead>
          <NoResultPara isDarkTheme={isDarkTheme}>
            Try different key words or remove search filter
          </NoResultPara>
          <NoResultButton onClick={onRetry} type="button">
            Retry
          </NoResultButton>
        </NoResultCon>
      )
    }}
  </ThemeContext.Consumer>
)

export default NoSearchResults

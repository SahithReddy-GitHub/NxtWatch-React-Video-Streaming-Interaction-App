import ThemeContext from '../../context/ThemeContext'

import {
  FailureCon,
  FailImg,
  FailHead,
  FailPara,
  FailButton,
} from './styledComponents'

const FailureView = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {onRetryFailure} = props

      const onRetry = () => {
        onRetryFailure()
      }

      return (
        <FailureCon>
          <FailImg
            alt="failure view"
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            }
          />
          <FailHead isDarkTheme={isDarkTheme}>
            Oops! Something Went Wrong
          </FailHead>
          <FailPara isDarkTheme={isDarkTheme}>
            We are having some trouble to complete your request.
            <br /> Please try again.
          </FailPara>
          <FailButton onClick={onRetry} type="button">
            Retry
          </FailButton>
        </FailureCon>
      )
    }}
  </ThemeContext.Consumer>
)

export default FailureView

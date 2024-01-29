import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import {LoaderCon} from './styledComponents'

const LoaderView = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <LoaderCon>
          <div className="loader-container" data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDarkTheme ? '#ffffff' : '#3b82f6'}
              height="50"
              width="50"
            />
          </div>
        </LoaderCon>
      )
    }}
  </ThemeContext.Consumer>
)

export default LoaderView

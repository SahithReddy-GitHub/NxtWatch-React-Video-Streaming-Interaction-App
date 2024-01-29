import {Component} from 'react'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'

import {
  NotFoundBgCon,
  RowCon,
  NotFoundCon,
  NotFoundImg,
  NotFoundHead,
  NotFoundPara,
  NotFoundCard,
} from './styledComponents'

class NotFound extends Component {
  componentDidMount = () => {
    const {changeSection} = this.context
    changeSection('NotFound')
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <NotFoundBgCon>
              <Navbar />
              <RowCon>
                <Sidebar />
                <NotFoundCon isDarkTheme={isDarkTheme}>
                  <NotFoundCard>
                    <NotFoundImg
                      alt="not found"
                      src={
                        isDarkTheme
                          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                      }
                    />
                    <NotFoundHead isDarkTheme={isDarkTheme}>
                      Page Not Found
                    </NotFoundHead>
                    <NotFoundPara isDarkTheme={isDarkTheme}>
                      We are sorry, the page you requested could not be found.
                    </NotFoundPara>
                  </NotFoundCard>
                </NotFoundCon>
              </RowCon>
            </NotFoundBgCon>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

NotFound.contextType = ThemeContext

export default NotFound

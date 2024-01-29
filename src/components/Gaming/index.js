import {Component} from 'react'
import Cookies from 'js-cookie'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'
import LoaderView from '../LoaderView'
import FailureView from '../FailureView'

import {
  BgCon,
  BodyCon,
  BodyCard,
  GamingBody,
  IconImg,
  ItemHead,
  ItemPara,
  GamingCard,
  GamingHeadView,
  IconCard,
  SiYoutubegamingIcon,
  GamingHead,
  GamingCon,
  GamingList,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.initial, gamingVideosList: []}

  componentDidMount = () => {
    this.getGamingVideosApi()
  }

  getGamingVideosApi = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const body = await response.json()
      const gamingVideos = body.videos
      const updatedGamingVideos = gamingVideos.map(eachGame => ({
        id: eachGame.id,
        thumbnailUrl: eachGame.thumbnail_url,
        title: eachGame.title,
        viewCount: eachGame.view_count,
      }))
      console.log(updatedGamingVideos)
      this.setState({
        gamingVideosList: updatedGamingVideos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetryGamingVideos = () => {
    this.getGamingVideosApi()
  }

  renderEachGamingVideo = data => {
    const {id, title, viewCount, thumbnailUrl} = data

    return (
      <ThemeContext.Consumer key={id}>
        {value => {
          const {isDarkTheme, changeSection} = value

          return (
            <GamingList key={id}>
              <GamingBody
                onClick={() => changeSection('VideoItem')}
                to={`/videos/${id}`}
              >
                <IconImg alt="video thumbnail" src={thumbnailUrl} />
                <ItemHead isDarkTheme={isDarkTheme}>{title}</ItemHead>
                <ItemPara>{`${viewCount} Watching Worldwide`}</ItemPara>
              </GamingBody>
            </GamingList>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderGamingBody = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const {gamingVideosList} = this.state

        return (
          <GamingCard>
            <GamingHeadView isDarkTheme={isDarkTheme}>
              <IconCard isDarkTheme={isDarkTheme}>
                <SiYoutubegamingIcon size={25} isDarkTheme={isDarkTheme} />
              </IconCard>
              <GamingHead isDarkTheme={isDarkTheme}>Gaming</GamingHead>
            </GamingHeadView>
            <GamingCon>
              {gamingVideosList.map(eachGameData =>
                this.renderEachGamingVideo(eachGameData),
              )}
            </GamingCon>
          </GamingCard>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderGamingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoaderView />
      case apiStatusConstants.failure:
        return <FailureView onRetryFailure={this.onRetryGamingVideos} />
      case apiStatusConstants.success:
        return this.renderGamingBody()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <BgCon>
              <Navbar />
              <BodyCon>
                <Sidebar />
                <BodyCard isDarkTheme={isDarkTheme} data-testid="gaming">
                  {this.renderGamingVideos()}
                </BodyCard>
              </BodyCon>
            </BgCon>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming

import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'
import LoaderView from '../LoaderView'
import FailureView from '../FailureView'

import {
  BgCon,
  BodyCon,
  BodyCard,
  TrendingBody,
  IconImg,
  ItemCard,
  ItemHead,
  ItemPara,
  RowCon,
  LuDotIcon,
  TrendingCard,
  TrendingHeadView,
  IconCard,
  FaFireAltIcon,
  TrendingHead,
  TrendingCon,
  TrendingList,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, trendingVideosList: []}

  componentDidMount = () => {
    this.getTrendingVideosApi()
  }

  getTrendingVideosApi = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const body = await response.json()
      const trendingVideos = body.videos
      const updatedTrendingVideos = trendingVideos.map(eachTrend => ({
        channel: eachTrend.channel,
        id: eachTrend.id,
        publishedAt: eachTrend.published_at,
        thumbnailUrl: eachTrend.thumbnail_url,
        title: eachTrend.title,
        viewCount: eachTrend.view_count,
      }))
      console.log(updatedTrendingVideos)
      this.setState({
        trendingVideosList: updatedTrendingVideos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetryTrendingVideos = () => {
    this.getTrendingVideosApi()
  }

  renderEachTrendingVideo = data => {
    const {id, channel, title, viewCount, publishedAt, thumbnailUrl} = data
    let numOfYearsAgo = formatDistanceToNow(new Date(publishedAt), {
      addSuffix: true,
    })
    numOfYearsAgo = numOfYearsAgo.replace(/^\w+\s+/, '')

    return (
      <ThemeContext.Consumer key={id}>
        {value => {
          const {isDarkTheme, changeSection} = value

          return (
            <TrendingList key={id}>
              <TrendingBody
                onClick={() => changeSection('VideoItem')}
                to={`/videos/${id}`}
              >
                <IconImg alt="video thumbnail" src={thumbnailUrl} />
                <ItemCard>
                  <ItemHead isDarkTheme={isDarkTheme}>{title}</ItemHead>
                  <ItemPara>{channel.name}</ItemPara>
                  <RowCon>
                    <ItemPara>{`${viewCount} views`}</ItemPara>
                    <RowCon>
                      <LuDotIcon size={20} />
                      <ItemPara>{numOfYearsAgo}</ItemPara>
                    </RowCon>
                  </RowCon>
                </ItemCard>
              </TrendingBody>
            </TrendingList>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderTrendingBody = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const {trendingVideosList} = this.state

        return (
          <TrendingCard>
            <TrendingHeadView isDarkTheme={isDarkTheme}>
              <IconCard isDarkTheme={isDarkTheme}>
                <FaFireAltIcon size={25} isDarkTheme={isDarkTheme} />
              </IconCard>
              <TrendingHead isDarkTheme={isDarkTheme}>Trending</TrendingHead>
            </TrendingHeadView>
            <TrendingCon>
              {trendingVideosList.map(eachVideoData =>
                this.renderEachTrendingVideo(eachVideoData),
              )}
            </TrendingCon>
          </TrendingCard>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderTrendingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoaderView />
      case apiStatusConstants.failure:
        return <FailureView onRetryFailure={this.onRetryTrendingVideos} />
      case apiStatusConstants.success:
        return this.renderTrendingBody()
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
                <BodyCard isDarkTheme={isDarkTheme} data-testid="trending">
                  {this.renderTrendingVideos()}
                </BodyCard>
              </BodyCon>
            </BgCon>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending

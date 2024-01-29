import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'
import LoaderView from '../LoaderView'
import FailureView from '../FailureView'

import {
  VideoItemDetailsBgCon,
  BodyCon,
  BodyCard,
  RowCon,
  VideoItemDetailsCon,
  VideoItemDetailsCard,
  VideoItemRowCon,
  ItemPara,
  LuDotIcon,
  ItemHead,
  AiOutlineLikeIcon,
  DislikedButton,
  LikedButton,
  SavedButton,
  AiOutlineDislikeIcon,
  MdPlaylistAddIcon,
  HorizantalLine,
  IconImg,
  HomeVideoItemCard,
  DescriptionPara,
  ChannelHead,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoData: {},
    isVideoItemLiked: false,
    isVideoItemDisliked: false,
  }

  componentDidMount = () => {
    this.getVideoItemDetailsApi()
  }

  getVideoItemDetailsApi = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const body = await response.json()
      const videoDetails = body.video_details
      const updatedVideoDetails = {
        channel: videoDetails.channel,
        description: videoDetails.description,
        id: videoDetails.id,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
      }
      this.setState({
        videoData: updatedVideoDetails,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onVideoItemRetryFailure = () => {
    this.getVideoItemDetailsApi()
  }

  onLikeClick = () => {
    this.setState(prevState => ({
      isVideoItemLiked: !prevState.isVideoItemLiked,
      isVideoItemDisliked: false,
    }))
  }

  onDislikeClick = () => {
    this.setState(prevState => ({
      isVideoItemDisliked: !prevState.isVideoItemDisliked,
      isVideoItemLiked: false,
    }))
  }

  renderVideoItemDetailsSuccess = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, addToSavedVideosList, savedVideosList} = value
        const {videoData, isVideoItemLiked, isVideoItemDisliked} = this.state
        const {
          channel,
          description,
          id,
          publishedAt,
          title,
          videoUrl,
          viewCount,
        } = videoData
        let numOfYearsAgo = formatDistanceToNow(new Date(publishedAt), {
          addSuffix: true,
        })
        numOfYearsAgo = numOfYearsAgo.replace(/^\w+\s+/, '')

        const onSaveClick = () => {
          addToSavedVideosList(videoData)
        }

        const isVideoSaved = savedVideosList.some(eachVal => eachVal.id === id)

        return (
          <VideoItemDetailsCon>
            <VideoItemDetailsCard>
              <ReactPlayer url={videoUrl} width="100%" />
              <ItemHead isDarkTheme={isDarkTheme}>{title}</ItemHead>
              <VideoItemRowCon>
                <RowCon>
                  <ItemPara
                    isDarkTheme={isDarkTheme}
                  >{`${viewCount} views`}</ItemPara>
                  <RowCon>
                    <LuDotIcon isDarkTheme={isDarkTheme} size={20} />
                    <ItemPara isDarkTheme={isDarkTheme}>
                      {numOfYearsAgo}
                    </ItemPara>
                  </RowCon>
                </RowCon>
                <RowCon>
                  <RowCon onClick={this.onLikeClick}>
                    <AiOutlineLikeIcon
                      isvideoitemliked={isVideoItemLiked ? 'true' : 'false'}
                      isDarkTheme={isDarkTheme}
                    />
                    <LikedButton
                      isvideoitemliked={isVideoItemLiked ? 'true' : 'false'}
                      isDarkTheme={isDarkTheme}
                      type="button"
                    >
                      Like
                    </LikedButton>
                  </RowCon>
                  <RowCon onClick={this.onDislikeClick}>
                    <AiOutlineDislikeIcon
                      isvideoitemdisliked={
                        isVideoItemDisliked ? 'true' : 'false'
                      }
                      isDarkTheme={isDarkTheme}
                    />
                    <DislikedButton
                      isvideoitemdisliked={
                        isVideoItemDisliked ? 'true' : 'false'
                      }
                      isDarkTheme={isDarkTheme}
                      type="button"
                    >
                      Dislike
                    </DislikedButton>
                  </RowCon>
                  <RowCon onClick={onSaveClick}>
                    <MdPlaylistAddIcon
                      isvideosaved={isVideoSaved ? 'true' : 'false'}
                      isDarkTheme={isDarkTheme}
                    />
                    <SavedButton
                      isvideosaved={isVideoSaved ? 'true' : 'false'}
                      isDarkTheme={isDarkTheme}
                      type="button"
                    >
                      {isVideoSaved ? 'Saved' : 'Save'}
                    </SavedButton>
                  </RowCon>
                </RowCon>
              </VideoItemRowCon>
              <HorizantalLine isDarkTheme={isDarkTheme} />
              <RowCon>
                <IconImg alt="channel logo" src={channel.profile_image_url} />
                <HomeVideoItemCard>
                  <ChannelHead isDarkTheme={isDarkTheme}>
                    {channel.name}
                  </ChannelHead>
                  <ItemPara
                    isDarkTheme={isDarkTheme}
                  >{`${channel.subscriber_count} subscribers`}</ItemPara>
                  <DescriptionPara isDarkTheme={isDarkTheme}>
                    {description}
                  </DescriptionPara>
                </HomeVideoItemCard>
              </RowCon>
            </VideoItemDetailsCard>
          </VideoItemDetailsCon>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideoItemDetailsPage = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoaderView />
      case apiStatusConstants.failure:
        return <FailureView onRetryFailure={this.onVideoItemRetryFailure} />
      case apiStatusConstants.success:
        return this.renderVideoItemDetailsSuccess()
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
            <VideoItemDetailsBgCon>
              <Navbar />
              <BodyCon>
                <Sidebar />
                <BodyCard
                  isDarkTheme={isDarkTheme}
                  data-testid="videoItemDetails"
                >
                  {this.renderVideoItemDetailsPage()}
                </BodyCard>
              </BodyCon>
            </VideoItemDetailsBgCon>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails

import {Component} from 'react'
import Cookies from 'js-cookie'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'
import HomeVideoItem from '../HomeVideoItem'
import FailureView from '../FailureView'
import LoaderView from '../LoaderView'

import {
  HomeBgCon,
  BodyCon,
  HomeCon,
  HomeCard,
  BannerCon,
  BannerCard,
  BannerImg,
  BannerPara,
  BannerButton,
  IoIosCloseIcon,
  CloseButton,
  SearchCon,
  IoMdSearchIcon,
  SearchCard,
  InputSearch,
  SearchButton,
  ResultVideosCon,
} from './styledComponents'
import NoSearchResults from '../NoSearchResults'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    isBannerDisplay: true,
    inputSearch: '',
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount = () => {
    this.getHomeDataApi()
  }

  getHomeDataApi = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {inputSearch} = this.state
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/all?search=${inputSearch}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    try {
      const response = await fetch(url, options)
      if (response.ok === true) {
        const body = await response.json()
        const updatedVideos = body.videos.map(eachVideo => ({
          channel: eachVideo.channel,
          id: eachVideo.id,
          publishedAt: eachVideo.published_at,
          thumbnailUrl: eachVideo.thumbnail_url,
          title: eachVideo.title,
          viewCount: eachVideo.view_count,
        }))
        console.log(body)
        this.setState({
          apiStatus: apiStatusConstants.success,
          videosList: updatedVideos,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch (error) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onCloseBanner = () => {
    this.setState(prevState => ({
      isBannerDisplay: !prevState.isBannerDisplay,
    }))
  }

  onChangeSearchInput = event => {
    const {inputSearch} = this.state
    if (event.key === 'Enter') {
      console.log(inputSearch)
    }
    this.setState({inputSearch: event.target.value})
  }

  onEnterKeyDown = event => {
    if (event.key === 'Enter') {
      this.getHomeDataApi()
    }
  }

  onSearch = () => {
    this.getHomeDataApi()
  }

  onRetryFailure = () => {
    this.getHomeDataApi()
  }

  onRetrySearch = () => {
    this.getHomeDataApi()
  }

  renderSuccessVideos = () => {
    const {videosList} = this.state

    if (videosList.length === 0) {
      return <NoSearchResults onRetrySearch={this.onRetrySearch} />
    }

    return (
      <ResultVideosCon>
        {videosList.map(eachVideoItem => (
          <HomeVideoItem key={eachVideoItem.id} data={eachVideoItem} />
        ))}
      </ResultVideosCon>
    )
  }

  renderResultedVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoaderView />
      case apiStatusConstants.failure:
        return <FailureView onRetryFailure={this.onRetryFailure} />
      case apiStatusConstants.success:
        return this.renderSuccessVideos()
      default:
        return null
    }
  }

  render() {
    const {isBannerDisplay, inputSearch} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <HomeBgCon>
              <Navbar />
              <BodyCon>
                <Sidebar />
                <HomeCon data-testid="home" isDarkTheme={isDarkTheme}>
                  {isBannerDisplay && (
                    <BannerCon data-testid="banner">
                      <BannerCard>
                        <BannerImg
                          alt="nxt watch logo"
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        />
                        <BannerPara>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerPara>
                        <BannerButton type="button">GET IT NOW</BannerButton>
                      </BannerCard>
                      <CloseButton
                        data-testid="close"
                        onClick={this.onCloseBanner}
                      >
                        <IoIosCloseIcon size={20} />
                      </CloseButton>
                    </BannerCon>
                  )}
                  <HomeCard>
                    <SearchCon>
                      <SearchCard>
                        <InputSearch
                          isDarkTheme={isDarkTheme}
                          type="search"
                          placeholder="Search"
                          value={inputSearch}
                          onChange={this.onChangeSearchInput}
                          onKeyDown={this.onEnterKeyDown}
                        />
                        <SearchButton
                          isDarkTheme={isDarkTheme}
                          type="button"
                          onClick={this.onSearch}
                          data-testid="searchButton"
                        >
                          <IoMdSearchIcon isDarkTheme={isDarkTheme} />
                        </SearchButton>
                      </SearchCard>
                    </SearchCon>
                    {this.renderResultedVideos()}
                  </HomeCard>
                </HomeCon>
              </BodyCon>
            </HomeBgCon>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home

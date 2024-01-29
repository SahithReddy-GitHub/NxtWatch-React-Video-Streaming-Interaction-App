import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'

import './App.css'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './context/ThemeContext'
import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'

class App extends Component {
  state = {isDarkTheme: true, selectedSection: 'Home', savedVideosList: []}

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  changeSection = val => {
    this.setState({selectedSection: val})
  }

  addToSavedVideosList = videoData => {
    const {savedVideosList} = this.state

    const isVideoDataIncluded = savedVideosList.some(
      eachVideoData => eachVideoData.id === videoData.id,
    )
    if (isVideoDataIncluded) {
      const updatedSavedVideosList = savedVideosList.filter(
        video => video.id !== videoData.id,
      )
      this.setState({savedVideosList: updatedSavedVideosList})
    } else {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoData],
      }))
    }
  }

  render() {
    const {isDarkTheme, selectedSection, savedVideosList} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          selectedSection,
          changeSection: this.changeSection,
          savedVideosList,
          addToSavedVideosList: this.addToSavedVideosList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App

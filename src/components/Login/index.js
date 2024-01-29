import Cookies from 'js-cookie'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import {
  LoginMainCon,
  InputLabel,
  Input,
  LoginCon,
  LoginImg,
  Form,
  InputCon,
  ShowPassCon,
  ErrorPara,
  CheckboxInput,
  LoginButton,
} from './styledComponents'

class Login extends Component {
  state = {
    username: 'rahul',
    password: 'rahul@2021',
    isShowPassword: false,
    errorMsg: '',
    showSubmitError: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({isShowPassword: !prevState.isShowPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = msg => {
    this.setState({showSubmitError: true, errorMsg: msg})
  }

  onLogin = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const body = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(body.jwt_token)
    } else {
      this.onSubmitFailure(body.error_msg)
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {
            username,
            password,
            isShowPassword,
            showSubmitError,
            errorMsg,
          } = this.state
          const jwtToken = Cookies.get('jwt_token')
          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }

          return (
            <LoginMainCon isDarkTheme={isDarkTheme}>
              <LoginCon isDarkTheme={isDarkTheme}>
                <LoginImg
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <Form onSubmit={this.onLogin}>
                  <InputCon>
                    <InputLabel htmlFor="username" isDarkTheme={isDarkTheme}>
                      USERNAME
                    </InputLabel>
                    <Input
                      isDarkTheme={isDarkTheme}
                      type="text"
                      id="username"
                      value={username}
                      onChange={this.onChangeUsername}
                      placeholder="Username"
                    />
                  </InputCon>

                  <InputCon>
                    <InputLabel htmlFor="password" isDarkTheme={isDarkTheme}>
                      PASSWORD
                    </InputLabel>
                    <Input
                      isDarkTheme={isDarkTheme}
                      type={isShowPassword ? 'text' : 'password'}
                      id="password"
                      value={password}
                      onChange={this.onChangePassword}
                      placeholder="Password"
                    />
                  </InputCon>
                  <ShowPassCon>
                    <CheckboxInput
                      id="showPassword"
                      type="checkbox"
                      onClick={this.onShowPassword}
                    />
                    <InputLabel
                      htmlFor="showPassword"
                      isDarkTheme={isDarkTheme}
                    >
                      Show Password
                    </InputLabel>
                  </ShowPassCon>
                  <LoginButton type="submit">Login</LoginButton>
                  {showSubmitError && <ErrorPara>*{errorMsg}</ErrorPara>}
                </Form>
              </LoginCon>
            </LoginMainCon>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login

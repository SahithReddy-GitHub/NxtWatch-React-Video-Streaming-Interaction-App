import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {IoIosMoon} from 'react-icons/io'
import Popup from 'reactjs-popup'

import ThemeContext from '../../context/ThemeContext'

import {
  NavCon,
  NavListCon,
  CustomLink,
  NavImg,
  ImgCon,
  CustomImg,
  IoIosSunnyIcon,
  LogoutButton,
  Button,
  MoadalCon,
  MoadalPara,
  ModalCard,
  ModalButton,
  NavListItem,
} from './styledComponents'

const Navbar = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const overlayStyles = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }

      const onConfirmLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <NavCon isDarkTheme={isDarkTheme}>
          <CustomLink to="/">
            <CustomImg
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </CustomLink>
          <NavListCon>
            <NavListItem key="theme">
              <Button onClick={toggleTheme} data-testid="theme">
                <ImgCon>
                  {isDarkTheme ? (
                    <IoIosSunnyIcon size={32} />
                  ) : (
                    <IoIosMoon size={32} />
                  )}
                </ImgCon>
              </Button>
            </NavListItem>
            <NavListItem key="profile">
              <NavImg
                alt="profile"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              />
            </NavListItem>

            <NavListItem key="logout">
              <Popup
                overlayStyle={overlayStyles}
                modal
                trigger={
                  <LogoutButton isDarkTheme={isDarkTheme}>Logout</LogoutButton>
                }
              >
                {cancel => (
                  <>
                    <MoadalCon isDarkTheme={isDarkTheme}>
                      <MoadalPara isDarkTheme={isDarkTheme}>
                        Are you sure, you want to logout?
                      </MoadalPara>
                      <ModalCard>
                        <ModalButton
                          isDarkTheme={isDarkTheme}
                          onClick={() => cancel()}
                        >
                          Cancel
                        </ModalButton>
                        <ModalButton
                          isDarkTheme={isDarkTheme}
                          onClick={onConfirmLogout}
                          confirm
                        >
                          Confirm
                        </ModalButton>
                      </ModalCard>
                    </MoadalCon>
                  </>
                )}
              </Popup>
            </NavListItem>
          </NavListCon>
        </NavCon>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Navbar)

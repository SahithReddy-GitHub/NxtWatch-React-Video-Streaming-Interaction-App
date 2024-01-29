import ThemeContext from '../../context/ThemeContext'
import {
  SidebarCon,
  RowCon,
  AiFillHomeIcon,
  SidebarPara,
  HiFireIcon,
  SiYoutubegamingIcon,
  MdOutlinePlaylistAddIcon,
  SidebarHead,
  SidebarCard,
  RowConBottom,
  Img,
  SidebarHeadLight,
} from './styledComponents'

const Sidebar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {selectedSection, changeSection, isDarkTheme} = value

      return (
        <SidebarCon isDarkTheme={isDarkTheme}>
          <div>
            <RowCon
              activecon={selectedSection === 'Home' ? 'true' : 'false'}
              isDarkTheme={isDarkTheme}
              onClick={() => changeSection('Home')}
              to="/"
            >
              <AiFillHomeIcon
                activecon={selectedSection === 'Home' ? 'true' : 'false'}
                size={18}
              />
              <SidebarPara
                activecon={selectedSection === 'Home' ? 'true' : 'false'}
                isDarkTheme={isDarkTheme}
              >
                Home
              </SidebarPara>
            </RowCon>
            <RowCon
              activecon={selectedSection === 'Trending' ? 'true' : 'false'}
              isDarkTheme={isDarkTheme}
              onClick={() => changeSection('Trending')}
              to="/trending"
            >
              <HiFireIcon
                activecon={selectedSection === 'Trending' ? 'true' : 'false'}
                size={18}
              />
              <SidebarPara
                activecon={selectedSection === 'Trending' ? 'true' : 'false'}
                isDarkTheme={isDarkTheme}
              >
                Trending
              </SidebarPara>
            </RowCon>
            <RowCon
              activecon={selectedSection === 'Gaming' ? 'true' : 'false'}
              isDarkTheme={isDarkTheme}
              onClick={() => changeSection('Gaming')}
              to="/gaming"
            >
              <SiYoutubegamingIcon
                activecon={selectedSection === 'Gaming' ? 'true' : 'false'}
                size={18}
              />
              <SidebarPara
                activecon={selectedSection === 'Gaming' ? 'true' : 'false'}
                isDarkTheme={isDarkTheme}
              >
                Gaming
              </SidebarPara>
            </RowCon>
            <RowCon
              activecon={selectedSection === 'Saved' ? 'true' : 'false'}
              isDarkTheme={isDarkTheme}
              onClick={() => changeSection('Saved')}
              to="/saved-videos"
            >
              <MdOutlinePlaylistAddIcon
                activecon={selectedSection === 'Saved' ? 'true' : 'false'}
                size={18}
              />
              <SidebarPara
                activecon={selectedSection === 'Saved' ? 'true' : 'false'}
                isDarkTheme={isDarkTheme}
              >
                Saved videos
              </SidebarPara>
            </RowCon>
          </div>
          <SidebarCard>
            <SidebarHead isDarkTheme={isDarkTheme}>CONTACT US</SidebarHead>
            <RowConBottom>
              <Img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </RowConBottom>
            <SidebarHeadLight isDarkTheme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </SidebarHeadLight>
          </SidebarCard>
        </SidebarCon>
      )
    }}
  </ThemeContext.Consumer>
)

export default Sidebar

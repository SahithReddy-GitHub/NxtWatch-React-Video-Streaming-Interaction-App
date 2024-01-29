import {formatDistanceToNow} from 'date-fns'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'
import NoSavedVideosFound from '../NoSavedVideosFound'

import {
  BgCon,
  BodyCon,
  BodyCard,
  SavedVideosCard,
  SavedVideosHeadView,
  SavedVideosHead,
  FaFireAltIcon,
  IconCard,
  SavedVideosCon,
  SavedVideosBody,
  IconImg,
  ItemCard,
  ItemHead,
  ItemPara,
  RowCon,
  LuDotIcon,
  SavedVideosList,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideosList, changeSection} = value
      const isSavedVideosEmpty = savedVideosList.length === 0

      const renderEachSavedVideo = data => {
        const {id, channel, title, viewCount, publishedAt, thumbnailUrl} = data
        let numOfYearsAgo = formatDistanceToNow(new Date(publishedAt), {
          addSuffix: true,
        })
        numOfYearsAgo = numOfYearsAgo.replace(/^\w+\s+/, '')

        return (
          <SavedVideosList key={id}>
            <SavedVideosBody
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
            </SavedVideosBody>
          </SavedVideosList>
        )
      }

      const renderSavedVideos = () => (
        <>
          {isSavedVideosEmpty && <NoSavedVideosFound />}

          {!isSavedVideosEmpty && (
            <SavedVideosCard>
              <SavedVideosHeadView isDarkTheme={isDarkTheme}>
                <IconCard isDarkTheme={isDarkTheme}>
                  <FaFireAltIcon size={25} isDarkTheme={isDarkTheme} />
                </IconCard>
                <SavedVideosHead isDarkTheme={isDarkTheme}>
                  Saved Videos
                </SavedVideosHead>
              </SavedVideosHeadView>
              <SavedVideosCon>
                {savedVideosList.map(eachSaved =>
                  renderEachSavedVideo(eachSaved),
                )}
              </SavedVideosCon>
            </SavedVideosCard>
          )}
        </>
      )

      return (
        <BgCon>
          <Navbar />
          <BodyCon>
            <Sidebar />
            <BodyCard isDarkTheme={isDarkTheme} data-testid="savedVideos">
              {renderSavedVideos()}
            </BodyCard>
          </BodyCon>
        </BgCon>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos

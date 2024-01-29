import {formatDistanceToNow} from 'date-fns'

import {
  HomeVideoItemCon,
  ListItem,
  Img,
  RowCon,
  IconImg,
  HomeVideoItemCard,
  ItemHead,
  ItemPara,
  LuDotIcon,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const HomeVideoItem = props => {
  const {data} = props
  const {id, title, thumbnailUrl, channel, publishedAt, viewCount} = data
  let numOfYearsAgo = formatDistanceToNow(new Date(publishedAt), {
    addSuffix: true,
  })
  numOfYearsAgo = numOfYearsAgo.replace(/^\w+\s+/, '')

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, changeSection} = value

        return (
          <ListItem>
            <HomeVideoItemCon
              to={`/videos/${id}`}
              onClick={() => changeSection('VideoItem')}
            >
              <Img src={thumbnailUrl} alt="video thumbnail" />
              <RowCon>
                <IconImg alt="channel logo" src={channel.profile_image_url} />
                <HomeVideoItemCard>
                  <ItemHead isDarkTheme={isDarkTheme}>{title}</ItemHead>
                  <ItemPara>{channel.name}</ItemPara>
                  <RowCon>
                    <ItemPara>{`${viewCount} views`}</ItemPara>
                    <RowCon>
                      <LuDotIcon size={20} />
                      <ItemPara>{numOfYearsAgo}</ItemPara>
                    </RowCon>
                  </RowCon>
                </HomeVideoItemCard>
              </RowCon>
            </HomeVideoItemCon>
          </ListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default HomeVideoItem

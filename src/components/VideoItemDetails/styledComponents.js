import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'

export const VideoItemDetailsBgCon = styled.div`
  min-height: 100vh;
`
export const BodyCon = styled.div`
  display: flex;
`
export const BodyCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 80%;
  overflow-y: scroll;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`
export const RowCon = styled.div`
  display: flex;
  align-items: center;
`
export const VideoItemDetailsCon = styled.div`
  width: 100%;
  height: 100%;
`
export const VideoItemDetailsCard = styled.div`
  width: 90%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`
export const VideoItemRowCon = styled(RowCon)`
  justify-content: space-between;
`
export const ItemPara = styled.p`
  font-size: 13px;
  line-height: 2;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#606060' : '#909090')};
`
export const LuDotIcon = styled(BsDot)`
  color: ${props => (props.isDarkTheme ? '#606060' : '#909090')};
  align-self: center;
  margin-left: 15px;
`
export const ItemHead = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#383838')};
  margin-top: 15px;
  margin-bottom: 10px;
`
export const AiOutlineLikeIcon = styled(AiOutlineLike)`
  width: 17px;
  height: 17px;
  margin-right: 3px;
  color: ${props =>
    (props.isvideoitemliked === 'true' && '#2563eb') ||
    (props.isDarkTheme ? '#64748b' : '#64748b')};
  cursor: pointer;
`
export const AiOutlineDislikeIcon = styled(AiOutlineDislike)`
  width: 17px;
  height: 17px;
  margin-right: 3px;
  color: ${props =>
    (props.isvideoitemdisliked === 'true' && '#2563eb') ||
    (props.isDarkTheme ? '#64748b' : '#64748b')};
  cursor: pointer;
`
export const MdPlaylistAddIcon = styled(MdPlaylistAdd)`
  width: 17px;
  height: 17px;
  margin-right: 3px;
  color: ${props =>
    (props.isvideosaved === 'true' && '#2563eb') ||
    (props.isDarkTheme ? '#64748b' : '#64748b')};
  cursor: pointer;
`
export const LikedButton = styled.button`
  line-height: 2;
  font-weight: 500;
  background-color: transparent;
  outline: none;
  border: none;
  color: ${props =>
    (props.isvideoitemliked === 'true' && '#2563eb') ||
    (props.isDarkTheme ? '#64748b' : '#64748b')};
  margin-right: 20px;
  font-size: 13px;
  cursor: pointer;
`
export const DislikedButton = styled.button`
  line-height: 2;
  font-weight: 500;
  background-color: transparent;
  outline: none;
  border: none;
  color: ${props =>
    (props.isvideoitemdisliked === 'true' && '#2563eb') ||
    (props.isDarkTheme ? '#64748b' : '#64748b')};
  margin-right: 20px;
  font-size: 13px;
  cursor: pointer;
`
export const SavedButton = styled.button`
  line-height: 2;
  font-weight: 500;
  background-color: transparent;
  outline: none;
  border: none;
  color: ${props =>
    (props.isvideosaved === 'true' && '#2563eb') ||
    (props.isDarkTheme ? '#64748b' : '#64748b')};
  margin-right: 20px;
  font-size: 13px;
  width: 30px;
  cursor: pointer;
`
export const HorizantalLine = styled.hr`
  border: 1px solid #cccccc;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const IconImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 15px;
  align-self: flex-start;
`
export const HomeVideoItemCard = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelHead = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#383838')};
  margin-top: 5px;
  margin-bottom: 5px;
`
export const DescriptionPara = styled(ItemPara)`
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#606060')};
  font-weight: 500;
  line-height: 1.5;
  margin-top: 20px;
  width: 95%;
`

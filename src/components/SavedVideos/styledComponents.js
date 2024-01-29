import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {FaFireAlt} from 'react-icons/fa'
import {BsDot} from 'react-icons/bs'

export const BgCon = styled.div`
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
export const SavedVideosCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const SavedVideosHeadView = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ebebeb')};
  padding: 15px 40px 15px 40px;
  display: flex;
  align-items: center;
`
export const IconCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f1f5f9')};
  margin-right: 10px;
`
export const FaFireAltIcon = styled(FaFireAlt)`
  color: #ff0000;
`
export const SavedVideosHead = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const SavedVideosCon = styled.ul`
  list-style-type: none;
  padding: 40px;
  display: flex;
  flex-direction: column;
`
export const SavedVideosList = styled.li`
  margin-bottom: 30px;
`
export const SavedVideosBody = styled(Link)`
  text-decoration: none;
  display: flex;
`
export const RowCon = styled.div`
  display: flex;
`
export const IconImg = styled.img`
  width: 20%;
  height: 120px;
  margin-right: 15px;
`
export const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
`
export const ItemHead = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#383838')};
  line-height: 1.5;
  margin-bottom: 5px;
`
export const ItemPara = styled.p`
  font-size: 13px;
  line-height: 2;
  font-weight: 500;
  color: #909090;
`
export const LuDotIcon = styled(BsDot)`
  color: #909090;
  align-self: center;
  margin-left: 15px;
`

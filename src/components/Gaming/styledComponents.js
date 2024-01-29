import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {SiYoutubegaming} from 'react-icons/si'

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
export const GamingCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const GamingHeadView = styled.div`
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
export const SiYoutubegamingIcon = styled(SiYoutubegaming)`
  color: #ff0000;
`
export const GamingHead = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const GamingCon = styled.ul`
  list-style-type: none;
  width: 90%;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
`
export const GamingList = styled.li`
  width: 22%;
  margin-right: 3%;
  margin-bottom: 30px;
`
export const GamingBody = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
`
export const IconImg = styled.img`
  width: 100%;
  margin-bottom: 15px;
`
export const ItemHead = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#383838')};
`
export const ItemPara = styled.p`
  font-size: 12px;
  line-height: 2;
  font-weight: 500;
  color: #909090;
`

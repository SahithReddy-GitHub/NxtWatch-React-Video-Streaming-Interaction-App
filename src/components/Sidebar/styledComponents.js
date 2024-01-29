import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {FaFireAlt} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import styled from 'styled-components'

export const SidebarCon = styled.div`
  width: 20%;
  min-height: 100%;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0px 0px 0px;
`
export const RowCon = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${props =>
    (props.activecon === 'true' &&
      (props.isDarkTheme ? '#424242' : '#f1f5f9')) ||
    'transparent'};
  cursor: pointer;
`

export const SidebarPara = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: ${props => {
    if (props.isDarkTheme) {
      return props.activecon === 'true' ? '#f4f4f4' : '#909090'
    }
    return props.activecon === 'true' ? '#000000' : '#606060'
  }};
`

export const AiFillHomeIcon = styled(AiFillHome)`
  color: ${props => (props.activecon === 'true' ? '#ff0000' : '#606060')};
  margin: 0px 20px 0px 15px;
`
export const HiFireIcon = styled(FaFireAlt)`
  color: ${props => (props.activecon === 'true' ? '#ff0000' : '#606060')};
  margin: 0px 20px 0px 15px;
`
export const SiYoutubegamingIcon = styled(SiYoutubegaming)`
  color: ${props => (props.activecon === 'true' ? '#ff0000' : '#606060')};
  margin: 0px 20px 0px 15px;
`
export const MdOutlinePlaylistAddIcon = styled(MdPlaylistAdd)`
  color: ${props => (props.activecon === 'true' ? '#ff0000' : '#606060')};
  margin: 0px 20px 0px 15px;
`
export const SidebarHead = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#f4f4f4' : '#424242')};
`
export const SidebarHeadLight = styled(SidebarHead)`
  font-size: 13px;
  font-weight: 500;
`
export const SidebarCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const RowConBottom = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props =>
    (props.activecon === 'true' &&
      (props.isDarkTheme ? '#424242' : '#f1f5f9')) ||
    'transparent'};
  cursor: pointer;
  padding: 0px;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 15px;
`

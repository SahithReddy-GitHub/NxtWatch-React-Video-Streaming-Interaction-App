import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'

export const ListItem = styled.li`
  width: 31%;
  margin-bottom: 50px;
  margin-right: 2%;
`
export const HomeVideoItemCon = styled(Link)`
  text-decoration: none;
`
export const Img = styled.img`
  width: 100%;
  margin-bottom: 5px;
`
export const RowCon = styled.div`
  display: flex;
`
export const IconImg = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 15px;
`
export const HomeVideoItemCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
`
export const ItemHead = styled.p`
  font-size: 13px;
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

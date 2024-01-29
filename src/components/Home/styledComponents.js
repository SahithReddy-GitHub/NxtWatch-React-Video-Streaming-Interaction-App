import styled from 'styled-components'
import {IoIosClose, IoMdSearch} from 'react-icons/io'

export const HomeBgCon = styled.div`
  min-height: 100vh;
`
export const BodyCon = styled.div`
  display: flex;
`
export const HomeCon = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 80%;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  overflow-y: scroll;
`
export const HomeCard = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`
export const BannerCon = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  padding: 20px 50px 20px 20px;
`
export const BannerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`
export const BannerImg = styled.img`
  width: 150px;
  margin-bottom: 15px;
`
export const BannerPara = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 15px;
  color: '#383838';
`
export const BannerButton = styled.button`
  padding: 8px 20px 8px 20px;
  cursor: pointer;
  color: #313131;
  border: 2px solid '#313131';
  font-weight: 600;
  border-radius: 3px;
  width: 120px;
  background-color: transparent;
`
export const CloseButton = styled.button`
  align-self: flex-start;
  background-color: transparent;
  border: none;
  outline: none;
`
export const IoIosCloseIcon = styled(IoIosClose)`
  color: #606060;
  cursor: pointer;
`
export const SearchCon = styled.div`
  width: 100%;
  margin-bottom: 20px;
`
export const SearchCard = styled.div`
  display: flex;
  align-items: center;
`
export const InputSearch = styled.input`
  background-color: ${props => (props.isDarkTheme ? '#606060' : '#f4f4f4')};
  background-color: transparent;
  border: 1px solid #909090;
  padding: 0px 10px 0px 10px;
  height: 30px;
  width: 30%;
  outline: none;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#606060')};
`
export const SearchButton = styled.button`
  padding: 5px 20px 5px 20px;
  height: 30px;
  border: 1px solid #909090;
  cursor: pointer;
  outline: none;
  background-color: ${props => (props.isDarkTheme ? '#424242' : '#cccccc')};
`
export const IoMdSearchIcon = styled(IoMdSearch)`
  width: 15px;
  height: 15px;
  color: ${props => (props.isDarkTheme ? '#909090' : '#181818')};
`
export const ResultVideosCon = styled.ul`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`

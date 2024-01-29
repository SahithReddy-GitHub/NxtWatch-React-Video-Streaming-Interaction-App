import styled from 'styled-components'

export const NoSavedVideosCon = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ebebeb')};
`
export const NoSavedVideosCard = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const NoSavedVideosImg = styled.img`
  width: 40%;
`
export const NoSavedVideosHead = styled.h1`
  font-size: 22px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
  line-height: 3;
  font-weight: 500;
`
export const NoSavedVideosPara = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#909090' : '#616e7c')};
  margin-bottom: 15px;
  text-align: center;
  line-height: 1.5;
`

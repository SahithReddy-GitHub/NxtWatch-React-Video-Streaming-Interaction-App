import styled from 'styled-components'

export const NotFoundBgCon = styled.div`
  min-height: 100vh;
`
export const RowCon = styled.div`
  display: flex;
`
export const NotFoundCon = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 80%;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ebebeb')};
`
export const NotFoundCard = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const NotFoundImg = styled.img`
  width: 300px;
  height: 250px;
`
export const NotFoundHead = styled.h1`
  font-size: 28px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
  line-height: 2;
  font-weight: 500;
`
export const NotFoundPara = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#909090' : '#616e7c')};
  margin-bottom: 15px;
  text-align: center;
  line-height: 1.5;
  font-weight: 500;
`

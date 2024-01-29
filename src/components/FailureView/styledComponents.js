import styled from 'styled-components'

export const FailureCon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const FailImg = styled.img`
  width: 300px;
  height: 250px;
`
export const FailHead = styled.h1`
  font-size: 22px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
  line-height: 3;
  font-weight: 500;
`
export const FailPara = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#909090' : '#616e7c')};
  margin-bottom: 15px;
  text-align: center;
  line-height: 1.5;
`
export const FailButton = styled.button`
  background-color: #4f46e5;
  width: 80px;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 8px;
  cursor: pointer;
`

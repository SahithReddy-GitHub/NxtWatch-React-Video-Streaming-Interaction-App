import styled from 'styled-components'

export const LoginMainCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
`
export const LoginCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 360px;
`
export const LoginImg = styled.img`
  width: 150px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  max-width: 350px;
`
export const InputCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`
export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#475569')};
`
export const Input = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid ${props => (props.isDarkTheme ? '#383838' : '#616e7c')};
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#64748b')};
  border-radius: 3px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`
export const ShowPassCon = styled(InputCon)`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`
export const CheckboxInput = styled.input`
  margin: 5px;
  cursor: pointer;
`
export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #0b69ff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  outline: none;
`
export const ErrorPara = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`

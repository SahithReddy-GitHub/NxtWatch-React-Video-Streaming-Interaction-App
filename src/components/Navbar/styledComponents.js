import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {IoIosSunny} from 'react-icons/io'

export const NavCon = styled.nav`
  height: 10vh;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px 0px 40px;
`
export const Button = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
`
export const CustomImg = styled.img`
  width: 120px;
`
export const CustomLink = styled(Link)`
  text-decoration: none;
`
export const NavListCon = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
`
export const NavListItem = styled.li`
  width: 100%;
`
export const NavImg = styled.img`
  width: 25px;
  height: 25px;
  margin: 0px 15px 0px 15px;
  cursor: pointer;
`
export const IoIosSunnyIcon = styled(IoIosSunny)`
  color: #ebebeb;
`
export const ImgCon = styled.div`
  margin: 0px 15px 0px 15px;
`
export const LogoutButton = styled(Button)`
  padding: 5px 20px 5px 20px;
  color: ${props => (props.isDarkTheme ? '#f4f4f4' : '#3b82f6')};
  border: 2px solid ${props => (props.isDarkTheme ? '#f4f4f4' : '#3b82f6')};
  font-weight: 600;
  border-radius: 3px;
  margin: 0px 15px 0px 15px;
`
export const MoadalCon = styled.div`
  width: 350px;
  height: 150px;
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#ffffff')};
  padding: 25px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`
export const MoadalPara = styled.p`
  color: ${props => (props.isDarkTheme ? '#f4f4f4' : '#64748b')};
  font-size: 14px;
  font-weight: 500;
`
export const ModalCard = styled.div`
  display: flex;
  margin-top: 25px;
`
export const ModalButton = styled(LogoutButton)`
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: ${props => (props.confirm ? '#3b82f6' : 'transparent')};
  color: ${props => (props.confirm ? '#ffffff' : '#cccccc')};
  border: 1px solid ${props => (props.confirm ? '#3b82f6' : '#cccccc')};
`

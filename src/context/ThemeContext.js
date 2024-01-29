import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: true,
  toggleTheme: {},

  selectedSection: 'Home',
  changeSection: {},

  savedVideosList: [],
  addToSavedVideosList: {},
})

export default ThemeContext

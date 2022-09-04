import { ThemeProvider } from '@mui/material'

import { adminTheme, defaultTheme, moderatorTheme } from 'src/styles/theme'

import MainLayout from './MainLayout'

export const defaultView = (args) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <MainLayout {...args} />
    </ThemeProvider>
  )
}

export const moderatorView = (args) => {
  return (
    <ThemeProvider theme={moderatorTheme}>
      <MainLayout {...args} />
    </ThemeProvider>
  )
}

export const adminView = (args) => {
  return (
    <ThemeProvider theme={adminTheme}>
      <MainLayout {...args} />
    </ThemeProvider>
  )
}

export default { title: 'Layouts/MainLayout' }

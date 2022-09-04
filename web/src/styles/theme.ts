import { createTheme } from '@mui/material'
import { purple, red } from '@mui/material/colors'

export const moderatorTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
})

export const adminTheme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
})

export const defaultTheme = createTheme({})

export const getCustomTheme = (role: string) => {
  if (role === 'moderator') return moderatorTheme
  if (role === 'admin') return adminTheme
  return defaultTheme
}

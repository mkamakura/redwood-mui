import { createTheme, ThemeProvider } from '@mui/material'
import { purple, red } from '@mui/material/colors'

import { useAuth } from '@redwoodjs/auth'
import { Router, Route, Set } from '@redwoodjs/router'

import MainLayout from 'src/layouts/MainLayout'

const moderatorTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
})

const adminTheme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
})

const defaultTheme = createTheme({})

const getCustomTheme = (role: string) => {
  if (role === 'moderator') return moderatorTheme
  if (role === 'admin') return adminTheme
  return defaultTheme
}

const Routes = () => {
  const { loading, isAuthenticated, currentUser } = useAuth()
  if (loading) return null
  return (
    <ThemeProvider theme={isAuthenticated ? getCustomTheme(currentUser.roles as string) : defaultTheme}>
      <Router>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Set wrap={MainLayout}>
          <Route path="/" page={HomePage} name="home" />
        </Set>
        <Route notfound page={NotFoundPage} />
      </Router>
    </ThemeProvider>
  )
}

export default Routes

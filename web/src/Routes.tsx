import { ThemeProvider } from '@mui/material'

import { useAuth } from '@redwoodjs/auth'
import { Router, Route, Set } from '@redwoodjs/router'

import MainLayout from 'src/layouts/MainLayout'
import { defaultTheme, getCustomTheme } from 'src/styles/theme'

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

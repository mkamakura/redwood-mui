import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, IconButton, Toolbar } from '@mui/material'

import { useAuth } from '@redwoodjs/auth'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  )
}

export default MainLayout

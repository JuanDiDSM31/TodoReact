import { Box, Toolbar } from '@mui/material'
import { Navbar, Sidebar } from '../components'

const draweWidth=240;
export const JournalLayout = ({children}) => {
  return (
    <>
     <Box sx={{display:'flex'}}>
        {/* Navbar */}
        <Navbar draweWidthaño={draweWidth} />
        <Sidebar draweWidthaño={draweWidth} />
        <Box component='main' 
          sx={{flexGrow: 1, p: 3}}
          >
            <Toolbar/>
            {children}
        </Box>
    </Box>
    </>
  )
}


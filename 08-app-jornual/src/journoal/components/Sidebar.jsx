import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const Sidebar = ({draweWidth=240}) => {
  return (
    
    <>
    <Box component='nav'
    sx={{width: {sm: draweWidth}, flexShrink:{sm: 0}}}
    
    >
    <Drawer
    variant='permanent' //Esto es temporal
    open={true}
    sx={{
        display:{xs: 'block'},
        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: draweWidth}
    }}
    
    >
        <Toolbar>
            <Typography variant="h6" noWrap component='div' >
                Juan Dominguez
            </Typography>
        </Toolbar>
        <Divider/>
       
        <List>
                {
                    ['Enero','Febrero','Marzo','Abril'].map( text => (
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={ text } />
                                    <ListItemText secondary={ 'Exercitation cillum irure elit consectetur.' } />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

    </Drawer>

    </Box>
    </>
  )
}

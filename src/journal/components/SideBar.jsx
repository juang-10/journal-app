import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { useSelector } from 'react-redux';

export const SideBar = ({drawerWidth = 240}) => {
  const { displayName } = useSelector( state => state.auth );

  return (
    <Box
      component='nav'
      sx={{ width: {sm: drawerWidth}, flexShrink: {sm: 0}, display: {xs: 'none', sm: 'block'}}}
    >
      <Drawer
        variant='permanent'
        open
        sx={{
          display: {xs: 'none', sm: 'block'},
          '& .MuiDrawer-paper': {width: drawerWidth, boxSizing: 'border-box'}
        }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>{ displayName }</Typography>
        </Toolbar>
        <Divider />

        <List>
          {
            ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'].map(text => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text}/>
                    <ListItemText secondary={'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'}/>
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
        
      </Drawer>
    </Box>
  )
}

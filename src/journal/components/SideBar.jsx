import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import { SideBarItem } from './SideBarItem';

export const SideBar = ({drawerWidth = 240}) => {
  const { displayName } = useSelector( state => state.auth );
  const { notes } = useSelector( state => state.journal );

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
            notes.map(note => (
              <SideBarItem key={note.id} {...note}/>
            ))
          }
        </List>
        
      </Drawer>
    </Box>
  )
}

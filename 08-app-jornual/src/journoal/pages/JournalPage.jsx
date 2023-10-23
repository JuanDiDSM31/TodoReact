import { IconButton } from '@mui/material'
import {JournalLayout} from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from "../views"
import { AddAlarmOutlined } from '@mui/icons-material'
export const JournalPage = () => {
  return (
   <>
    
    <JournalLayout>
    {/* <NoteView/> */}
   <NothingSelectedView/>

   <IconButton size='large'
   sx={{
    color: 'white', 
    backgroundColor: 'error.main',
    ':hover': {backgroundColor:'error.main', opacity: 0.9},
    position: 'fixed',
    right: 50, 
    bottom: 50
   }}  >
    <AddAlarmOutlined sx={{fontSize: 30}} />
  </IconButton>
    

     {/* <NoteView/> */}

    </JournalLayout>
   </>
  )
}

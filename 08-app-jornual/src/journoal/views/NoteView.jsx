import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
// import { ImageGallery } from "../components"



export const NoteView = () => {
  return (
    <>
    <Grid container direction="row" justifyContent="space-between" sx={{mb: 1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight='ligh' >20-Octubre-2023</Typography>
            
        </Grid>
        <Grid item>
            <Button color="primary" sx={{padding: 2}}>
                <SaveOutlined sx={{fontSize: 30, mr: 1}}/>
                Guardad
            </Button>

        </Grid>
        <Grid container>
            <TextField  
            type="text"
            variant="filled"
            fullWidth
            placeholder="Ingresa el titulo"
            label="Titulo"
            sx={{border: 'none', mb: 1}}
            />
             <TextField  
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="¿Que sucedio hoy?"
            minRows={5}
            />
           
        </Grid>
        <ImageGallery/>
    </Grid>
    </>
  )
}

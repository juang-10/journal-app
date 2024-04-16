import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks';

const formData = {
  email: 'juan@google.com',
  password: '123456',
  displayName: 'Juan'
}

export const RegisterPage = () => {
  const { email, password, onInputChange, displayName, formState } =  useForm(formData);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={onSubmit}>
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2}}>
            <TextField 
              label="Nombre completo" 
              type="text" 
              placeholder="Nombre completo"
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2}}>
            <TextField 
              label="Correo" 
              type="email" 
              placeholder="correo@correo.com"
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2}}>
            <TextField 
              label="Contraseña" 
              type="password" 
              placeholder="Contraseña"
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1}}>

            <Grid item xs={12}>
              <Button 
                variant="contained" 
                fullWidth
                type='submit'
              >
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1}}>¿Ya tienes una cuenta?</Typography>
            <Link component={ RouterLink } color='inherit' to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}


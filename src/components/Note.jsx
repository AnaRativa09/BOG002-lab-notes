import React from 'react';
import {
  Card, CardActions, CardContent, Button, Typography,
} from '@mui/material';

import { deleteNote } from '../controller/firebaseFirestore';

export default function Note({ data }) {
  return (
    <>
      <Card variant="outlined" sx={{ maxWidth: 250 }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            fecha
          </Typography>
          <Typography variant="h5" component="div">
            Título:
            {' '}
            {data.title}
          </Typography>
          <Typography variant="body2">
            {data.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" size="small">Editar</Button>
          <Button variant="outlined" size="small" onClick={() => deleteNote(data.id)}>Eliminar</Button>
        </CardActions>
      </Card>
    </>
  );
}

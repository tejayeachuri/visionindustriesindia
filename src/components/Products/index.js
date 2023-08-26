import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cards = {
  name: [{
    image: '/img/trilok.gif',
    name: 'TRILOK',
    textContent: 'Net Content: 100gms',
    to: "/docs/products/trilok"
  },
  {
    image: '/img/sanatana.gif',
    name: 'SANATANA',
    textContent: 'Net Content: 75gms',
    to: "/docs/products/sanatana"
  },
  {
    image: '/img/mystic.gif',
    name: 'MYSTIC AROMAS',
    textContent: 'Net Content: 75gms',
    to: "/docs/products/siddhi"
  },
  {
    image: '/img/siddhi.gif',
    name: 'SIDDHI',
    textContent: 'Net Content: 75gms',
    to: "/docs/products/mystic"
  },
  {
    image: '/img/shakti.gif',
    name: 'SHAKTI',
    textContent: 'Net Content: 35gms',
    to: "/docs/products/shakti"
  },
  {
    image: '/img/serenity.gif',
    name: 'SERENITY STICKS',
    textContent: 'Net Content: 15gms',
    to: "/docs/products/serenity"
  },
  ],
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        <br></br>
        <Divider>
          <Chip label="FEATURED PRODUCTS" />
        </Divider>
        <br></br>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Array of products catering to your every occasion
        </Typography>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.name.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '70.25%',
                    }}
                    image={card.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="subtitle1">
                      {card.name}
                    </Typography>
                    <Typography variant="caption" >
                      {card.textContent}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained"
                      href={card.to}
                      size="small">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
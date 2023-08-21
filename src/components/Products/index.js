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
    image: 'https://raw.githubusercontent.com/tejayeachuri/visionindustriesindia/main/static/img/Image3.jpeg',
    name: 'Sanathana',
    textContent: 'NetWgt: 100gms ',
    to: "/docs/intro"
  },
  {
    image: 'https://raw.githubusercontent.com/tejayeachuri/visionindustriesindia/main/static/img/Image5.jpeg',
    name: 'Siddhi',
    textContent: 'NetWgt: 200gms ',
    to: "/docs/intro"
  },
  {
    image: 'https://raw.githubusercontent.com/tejayeachuri/visionindustriesindia/main/static/img/Image4.jpeg',
    name: 'Mystic Aromas',
    textContent: 'NetWgt: 300gms ',
    to: "/docs/intro"
  },
  {
    image: 'https://raw.githubusercontent.com/tejayeachuri/visionindustriesindia/main/static/img/Image5.jpeg',
    name: 'Sandal',
    textContent: 'NetWgt: 400gms ',
    to: "/docs/intro"
  },
  {
    image: 'https://raw.githubusercontent.com/tejayeachuri/visionindustriesindia/main/static/img/Image6.jpeg',
    name: 'Black',
    textContent: 'NetWgt: 500gms ',
    to: "/docs/intro"
  },
  {
    image: 'https://raw.githubusercontent.com/tejayeachuri/visionindustriesindia/main/static/img/Image3.jpeg',
    name: 'Enchanting',
    textContent: 'NetWgt: 600gms ',
    to: "/docs/intro"
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
                      pt: '56.25%',
                    }}
                    image={card.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {card.name}
                    </Typography>
                    <Typography >
                      {card.textContent}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
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
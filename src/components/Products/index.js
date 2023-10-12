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

const products = {
  name: [{
    image: '/img/trilok.svg',
    name: 'TRILOK',
    textContent: 'Net Content: 100gms',
    to: "/docs/products/trilok"
  },
  {
    image: '/img/sanatana.svg',
    name: 'SANATANA',
    textContent: 'Net Content: 75gms',
    to: "/docs/products/sanatana"
  },
  {
    image: '/img/mystic.svg',
    name: 'MYSTIC AROMAS',
    textContent: 'Net Content: 75gms',
    to: "/docs/products/siddhi"
  },
  {
    image: '/img/siddhi.svg',
    name: 'SIDDHI',
    textContent: 'Net Content: 75gms',
    to: "/docs/products/mystic"
  },
  {
    image: '/img/shakti.svg',
    name: 'SHAKTI',
    textContent: 'Net Content: 35gms',
    to: "/docs/products/shakti"
  },
  {
    image: '/img/serenity.svg',
    name: 'SERENITY STICKS',
    textContent: 'Net Content: 15gms',
    to: "/docs/products/serenity"
  },
  ],
}

const floral = {
  name: [{
    image: '/img/flora_wet.svg',
    name: 'Flora Incense Wet',
  },
  {
    image: '/img/brown.svg',
    name: 'Flora Incense Dry ',
  },
  ],
}

const special = {
  name: [{
    image: '/img/loban.svg',
    name: 'Loban Agarbatti',
    textContent: 'We have sourced the highest quality Loban resin, ensuring that each incense stick releases a rich, authentic, and long-lasting fragrance that fills your space with tranquility and serenity',
  },
  {
    image: '/img/multi.svg',
    name: 'Multi color Agarbatti',
    textContent: 'Our finely crafted incense sticks bring together the captivating realm of incense with an array of lively colors. The infusion of these vibrant hues elevates the visual allure of your incense ceremony, creating a sensory delight for all involved.',
  },
  {
    image: '/img/mosquito.svg',
    name: 'Mosquito Repellent Agarbatti',
    textContent: 'Our Mosquito Repellent Agarbatti is expertly formulated with natural mosquito-repelling ingredients. Say goodbye to chemical-laden mosquito repellents and embrace the natural goodness of our Mosquito Repellent Agarbatti.',
  },
  ],
}

const raw = {
  name: [{
    image: '/img/black.svg',
    name: 'Black Raw Agarbatti',
  },
  {
    image: '/img/brown.svg',
    name: 'Brown Raw Agarbatti',
  },
  {
    image: '/img/white.svg',
    name: 'White Raw Agarbatti',
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
        <Container sx={{ py: 8 }}>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {products.name.map((card) => (
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
          <br></br>
          <Divider>
            <Chip label="Flora Incense (Masala Agarbattis)" />
          </Divider>
          <br></br>
          <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Our Masala Agarbatti stands as a testament to our steadfast dedication to both quality and tradition. 
          It is an artfully curated aromatic blend, meticulously crafted using essential oils and natural materials.
        </Typography>
          <Grid container spacing={4}>
          {floral.name.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={6}>
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
                </Card>
            </Grid>
          ))}
        </Grid>
          <br></br>
          <Divider>
            <Chip label="Special Agarbattis" />
          </Divider>
          <br></br>
          <Grid container spacing={4}>
          {special.name.map((card) => (
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
              </Card>
            </Grid>
          ))}
        </Grid>
          <br></br>
          <Divider>
            <Chip label="Raw Agarbattis" />
          </Divider>
          <br></br>
          <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Our Black, Brown, and White Raw Agarbattis are crafted using a blend of premium ingredients that include top-notch raw materials of the highest quality
        </Typography>
          <Grid container spacing={4}>
          {raw.name.map((card) => (
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
              </Card>
            </Grid>
          ))}
        </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
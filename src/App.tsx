import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardContent, CardMedia, Container, Stack, Typography, Box, AppBar, createSvgIcon, IconButton, Icon } from '@mui/material';

interface CardProps {
  title: string;
  imageUrl: string;
  role: string;
  actionLink: string;
}

const ProjectCard = (props: CardProps) => {
  return (
    <Card
      raised
    >
      <Box sx={{ position: 'relative'}}>
        <CardMedia
          component="img"
          image={process.env.PUBLIC_URL + props.imageUrl}
          alt="re-o-ri"
          sx={{ padding: "1em 1em 0 1em", objectFit: 'fill', height: 'auto', maxHeight: '450px'}}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            bgcolor: 'rgba(0, 0, 0, 0.54)',
            color: 'white',
            padding: '10px',
          }}
        >
          <Typography gutterBottom variant="h3" component="div">
            {props.title}
          </Typography>
        </Box>
      </Box>


      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.role}
        </Typography>
      </CardContent>
    </Card>
  );
}

function App() {
  return (
    <Container fixed>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Box sx={{ m: 1 }}>
            <Typography variant="h3">
              Dylan Peck
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
              <Typography variant="h5">
                Game Developer and Game Designer
              </Typography>
              <Box style={{ marginLeft: 'auto'}}>
                <IconButton href="https://www.linkedin.com/in/dylan-peck-b08160156" style={{ marginLeft: 'auto'}}>
                  <Icon>
                    <img src={process.env.PUBLIC_URL + '/linkedin-icon.png'} alt="linkedin" height={24} width={24} />
                  </Icon>
                </IconButton>
                <IconButton href="https://github.com/dylanmpeck" style={{ marginLeft: 'auto'}}>
                  <Icon>
                    <img src={process.env.PUBLIC_URL + '/github-logo.png'} alt="github" height={24} width={24} />
                  </Icon>
                </IconButton>
              </Box>
            </Box>
          </Box>
        </AppBar>
      </Box>
      <Box sx={{ margin: '1em' }}>
        <Stack spacing={2}>
          <Typography variant="h6">
            <b>Hello and welcome to my portfolio!</b>
          </Typography>
          <Typography variant="h6">
            I am a game developer and game designer with a passion for creating unique and engaging experiences. Currently, I am a Software Development Engineer at Amazon, and before that, I worked on a wide variety of game projects as a contractor.
          </Typography>
          <Typography variant="h6">
            I have development experience with Unity, Unreal Engine, C#, and C++ but am also passionate about systems design, level design, and prototyping.
          </Typography>
          <Typography variant="h6">
            <b>Click the images below to learn more about some of the projects I have worked on!</b>
          </Typography>
        </Stack>
      </Box>
      <Box sx={{ display: 'flex', padding: '2em'}}>
        <Typography variant="h1">
          <u>Projects</u>
        </Typography>
      </Box>
      <Stack spacing={3}>
          <ProjectCard
            title="Re-O-Ri"
            imageUrl="/re-o-ri.jpg"
            role="Developer and Designer"
            actionLink="/"
          />
          <ProjectCard
            title="Beat Virus"
            imageUrl="/beat-virus.png"
            role="Developer and Designer"
            actionLink="/"
          />
          <ProjectCard
            title="VR Bike"
            imageUrl="/vr-bike.png"
            role="Developer and Designer"
            actionLink="/"
          />
          <ProjectCard
            title="RAB"
            imageUrl="/rab.png"
            role="Developer and Designer"
            actionLink="/"
          />
          <ProjectCard
            title="Tempus84"
            imageUrl="/tempus84.jpg"
            role="Contract Developer"
            actionLink="/"
          />
          <ProjectCard
            title="Wolf3D"
            imageUrl="/wolf3d.png"
            role="Developer, Designer, Audio"
            actionLink="/"
          />
          <ProjectCard
            title="Pompadroid"
            imageUrl="/pompadroid.png"
            role="Developer, Designer, Audio"
            actionLink="/"
          />
      </Stack>
    </Container>
  );
}

export default App;

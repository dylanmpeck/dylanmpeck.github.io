import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
    return (
      <Box>
        <Paper elevation={3}>
          <Box sx={{ paddingTop: '16px', paddingLeft: '16px' }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="text.secondary">
                <b>Hello and welcome to my portfolio!</b>
              </Typography>
              <Typography variant="h6">
                I am a game developer and game designer with a passion for creating unique and engaging experiences. Currently, I am a Software Development Engineer at Amazon, and before that, I worked on a wide variety of game projects as a contractor.
              </Typography>
              <Typography variant="h6">
                I have development experience with Unity, Unreal Engine, C#, and C++ but am also passionate about systems design, level design, and prototyping.
              </Typography>
              <Typography variant="h6" color="text.secondary">
                <b>Click the images below to learn more about some of the projects I have worked on!</b>
              </Typography>
            </Stack>
          </Box>
          <Box sx={{ paddingTop: '2em'}}>
            <Typography variant="h1" align='center' color="text.secondary">
              Projects
            </Typography>
            <Divider sx={{ display: 'inline-block', bgcolor: "text.secondary", width: '100%', height: '2px', marginTop: 'auto', marginLeft: 'auto' }}/>
          </Box>
          <Stack spacing={0}>
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
        </Paper>
      </Box>
    );
}

export default Home;
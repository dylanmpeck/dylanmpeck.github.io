import { Box, Divider, Stack, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
    window.scrollTo(0, 0);
    return (
      <Box>
        <Box sx={{  }}>
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
        <Box sx={{ paddingTop: '2em', overflowWrap: "break-word"}}>
          <Typography variant="h2" align='left' color="text.secondary">
            Projects
          </Typography>
          <Divider sx={{ display: 'inline-block', bgcolor: "text.secondary", width: '100%', height: '2px', marginTop: 'auto', marginLeft: 'auto' }}/>
        </Box>
        <Stack spacing={0}>
            <ProjectCard
              title="Re-O-Ri"
              imageUrl="/re-o-ri.jpg"
              role="Developer and Designer"
              actionLink="/#/re-o-ri"
            />
            <ProjectCard
              title="Beat Virus"
              imageUrl="/beat-virus.png"
              role="Developer and Designer"
              actionLink="/#/beat-virus"
            />
            <ProjectCard
              title="VR Bike"
              imageUrl="/vr-bike.png"
              role="Developer and Designer"
              actionLink="/#/vr-bike"
            />
            <ProjectCard
              title="Wolf3D"
              imageUrl="/wolf3d.png"
              role="Developer, Designer, Audio"
              actionLink="/#/wolf3d"
            />
            <ProjectCard
              title="Pompadroid"
              imageUrl="/pompadroid.png"
              role="Developer, Designer, Audio"
              actionLink="/#/pompadroid"
            />
        </Stack>
      </Box>
    );
}

export default Home;
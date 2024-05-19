import { Box } from '@mui/material';
import PageTitle from '../components/Title';
import Paragraph from '../components/Paragraph';

const Wolf3D = () => {
    window.scrollTo(0, 0);
    return (
        <Box>
            <PageTitle name="Wolf3D" variant="h2" align="left"/>
            <Box sx={{ padding: '1em', aspectRatio: '16 / 9' }}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CJ94sQmPYrU?si=oYDe7yZLa2pVuAuO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </Box>
            <PageTitle name="Overview" variant="h3" align="left" />
            <Paragraph
                content="Wolf3D is a classic Wolfenstein 3D clone aimed at learning and reproducing a simple version of John Carmack's raycasting method as well as building a flexible map editor."
            />
            <PageTitle name="Features" variant="h3" align="left" />
            <Box>
                <ul style={{ color: "#999"}}>
                    <li>Rudimentary 3D graphics achieved through raycasting</li>
                    <li>A maze with varying wall textures based off the cardinal direction that the wall is facing</li>
                    <li>Smooth movement</li>
                    <li>Wall collision</li>
                    <li>Floor, Ceiling, and Skybox</li>
                    <li>Decorative, object sprites</li>
                    <li>Enemy sprites drawn in 8 different directions</li>
                    <li>Random weight based decision making enemy AI</li>
                    <li>Very simple gunplay</li>
                    <li>Original sounds and music</li>
                    <li>Key which can be picked up and used on locked door</li>
                    <li>Openable, animated doors</li>
                    <li>Simple HUD displaying current health</li>
                    <li>Flexible map editor and spritesheet for building more levels</li>
                </ul>

            </Box>
        </Box>
    )
}

export default Wolf3D;
import { Box } from '@mui/material';
import Paragraph from '../components/Paragraph';
import PageTitle from '../components/Title';

const VRBike = () => {
    window.scrollTo(0, 0);
    return (
        <Box>
            <PageTitle name="VR Bike" variant="h2" align="left"/>
            <Box sx={{ padding: '1em', aspectRatio: '16 / 9' }}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/fm-PJcVgxT8?si=MGFbp-1esvSpaiMw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </Box>
            <PageTitle name="Overview" variant="h3" align="left" />
            <Paragraph
                content="VRBike is a virtual reality fitness app where you pedal a hardware exercise bike and dodge endless runner style obstacles. The virtual game's speed is grabbed from the physical bike using a sensor magnet which logs revolutions of the pedals to a raspberry pi which can then calculate the speed from the RPM. The calculated speed is sent to the game as a message using a websocket server hosted by the raspberry pi."
            />
            <Paragraph
                content="This game was built over the course of a weekend for Global Game jam. My teammate worked on the hardware side of things while I worked on the game itself."
            />
            <Paragraph
                content="Within that scope, I was able to design and implement randomly generated obstacles, collectibles with score, a level with procedurally generated borders, song selection, environmental reaction to music, and a control system."
            />
            <Paragraph
                content="The control system was the trickiest and most interesting part to implement for a few reasons. Our demo bike had no handles so we needed an alternate method to steer, the speed reported from the bike could sometimes rise at a rate that didn't feel natural, and it was difficult to feel the speed in game."
            />
            <Paragraph
                content="For the controls, I implemented a system where the player could lean left or right to steer. This was done by calculating the angle of the player's head in relation to the center of the bike and using that to steer. The speed of the steer was then adjusted by the player's lean angle so that the player could make sharper turns."
            />
            <Paragraph
                content="The speed rising issue was solved by implementing a soft linear interpolation between the current speed and the newly reported speed. And to make the speed feel more real and also make the game easier to develop, the speed is applied to the level rather than the player. So, the faster a player pedals, the faster the obstacles and moutains will fly at them. This created an illusion of moving fast."
            />
            <PageTitle name="Improvement Ideas" variant="h3" align="left" />
            <Paragraph
                content="While the head tilting controls worked, some players found that it contributed to motion sickness. I think it would be an improvement to connect this game to a bike with handles that has controls for sliding. Having buttons for left, right, and jump on the handles or frame would also open the possibility for verticallity and more complex obstacle patterns as well."
            />
            <Paragraph
                content="I would also want to add different types of obstacles. Something like a ramp before a large pit to encourage pedaling fast would be fun. It would be interesting to include PowerUps that could either be found or purchased with score gained by collectibles. There could be common PowerUps like magnet, invincibility, and speed boost, but also unique ones like something that allows you to move without pedaling for a short time."
            />
            <Paragraph 
                content="I wanted to add branching paths that would go left, right, up, or down in the tracks. This could create a more dynamic experience and ideally uphill/downhill paths would create a more authentic biking experience."
            />
            <Paragraph
                content="Lastly, I would want to add a more robust song selection system. I think it would be cool to have a system where the game could analyze a song and generate a track based on the song's beats and tempo. Currently, the game uses locally packaged song files with hardcoded BPMs."
            />
            <Paragraph
                content="I would want to explore integrating the Spotify API for this. It might be possible get that data from Spotify's tools and then allow a player to select any song from their Spotify library. But, this would create an undesired dependency on Spotify."
            />
        </Box>
    );
}

export default VRBike;
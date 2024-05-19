import { Box } from '@mui/material';
import PageTitle from '../components/Title';
import Paragraph from '../components/Paragraph';

const Pompadroid = () => {
    return (
        <Box>
            <PageTitle name="Pompadroid" variant="h2" align="left"/>
            <Box sx={{ padding: '1em', aspectRatio: '16 / 9' }}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/n4CmoxLUtxw?si=21zan-ImldhI3dMq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </Box>
            <PageTitle name="Overview" variant="h3" align="left" />
            <Paragraph
                content="A simple 2D beat em up game made in Unity using assets and instructions from a Ray Wenderlich tutorial series found here: https://www.raywenderlich.com/5568-unity-beat-em-up-game-tutorial-getting-started"
            />
            <Paragraph
                content="This project was a means of exploring and learning the Unity engine better. Assets and walkthrough were provided by tutorial. Music is original and created by me."
            />
        </Box>
    )
}

export default Pompadroid;
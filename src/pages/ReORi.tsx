import { Box } from '@mui/material';
import PageTitle from '../components/Title';
import Paragraph from '../components/Paragraph';

const ReORi = () => {
    window.scrollTo(0, 0);
    return (
        <Box>
            <PageTitle name="Re-O-Ri" variant="h2" align="left"/>
            <Box sx={{ padding: '1em' }}>
                <iframe src="https://store.steampowered.com/widget/958750/" frameBorder="0" width="100%" height="190" title='Re-O-Ri'/>
            </Box>
            <Paragraph
                content="Re-O-Ri is a turn based single and multiplayer strategy VR card game heavily inspired by Yu-Gi-Oh."
            />
            <Paragraph
                content="On Re-O-Ri, I was responsible for designing and implementing the deck building system (pictured below) as well as solving various networking bugs with the multiplayer."
            />
            <Paragraph
                content="The deckbuilding system was designed around recreating the experience of sifting through a physical card collection in VR."
            />
            <Paragraph
                content="A player's card collection is displayed on a multi-page panel which they can flip through to view their cards. A player can then grab a card, inspect it, and place it in their deck if they choose."
            />
            <Paragraph
                content="A deck has a 60 card limit, but a player can strategically choose to have a deck with less cards if they prefer. I designed a mechanism for saving and deleting decks so that players can manage multiple decks and choose their deck before entering a match."
            />
            <Box
                component="img"
                alt="deck-building"
                sx={{ width: '100%', height: 'auto', maxHeight: '400px', paddingX: '4rem', paddingTop: '2em'}}
                src={process.env.PUBLIC_URL + '/deck-builder.jpg'}
            />
        </Box>
    )
}

export default ReORi;
import { Box, Divider, Typography } from '@mui/material';

const ReORi = () => {
    return (
        <Box>
            <Box sx={{ paddingTop: '2em'}}>
                <Typography variant="h2" align='center' color="text.secondary">
                    Re-O-Ri
                </Typography>
                <Divider sx={{ display: 'inline-block', bgcolor: "text.secondary", width: '100%', height: '2px', marginTop: 'auto', marginLeft: 'auto' }}/>
            </Box>
            <Box sx={{ padding: '1em' }}>
                <iframe src="https://store.steampowered.com/widget/958750/" frameBorder="0" width="100%" height="190" title='Re-O-Ri'/>
            </Box>
            <Box sx={{ padding: '1em' }}>
                <Typography variant="h5" color="text.primary">
                    Re-O-Ri is a turn based single and multiplayer strategy VR card game heavily inspired by Yu-Gi-Oh. 
                </Typography>
            </Box>
            <Box sx={{ padding: '1em' }}>
                <Typography variant="h5" color="text.primary">
                    On Re-O-Ri, I was responsible for designing and implementing the deck building system (pictured below) as well as solving various networking bugs with the multiplayer.
                </Typography>
            </Box>
            <Box sx={{ padding: '1em' }}>
                <Typography variant="h5" color="text.primary">
                    The deckbuilding system was designed around recreating the experience of sifting through a physical card collection in VR.
                </Typography>
            </Box>
            <Box sx={{ padding: '1em' }}>
                <Typography variant="h5" color="text.primary">
                    A player's card collection is displayed on a multi-page panel which they can flip through to view their cards.
                    A player can then grab a card, inspect it, and place it in their deck if they choose.
                </Typography>
            </Box>
            <Box sx={{ padding: '1em' }}>
                <Typography variant="h5" color="text.primary">
                    A deck has a 60 card limit, but a player can strategically choose to have a deck with less cards if they prefer.
                    I designed a mechanism for saving and deleting decks so that players can manage multiple decks and choose their deck before entering a match.
                </Typography>
            </Box>
            <Box
                component="img"
                alt="deck-building"
                sx={{ width: '100%', height: 'auto', maxHeight: '350px', paddingX: '4rem', paddingTop: '1em'}}
                src={process.env.PUBLIC_URL + '/deck-builder.jpg'}
            />
        </Box>
    )
}

export default ReORi;
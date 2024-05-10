import { Box, Divider, Typography } from '@mui/material';

const BeatVirus = () => {
    return (
        <Box>
            <Box sx={{ paddingTop: '2em'}}>
                <Typography variant="h2" align='center' color="text.secondary">
                    Beat Virus
                </Typography>
                <Divider sx={{ display: 'inline-block', bgcolor: "text.secondary", width: '100%', height: '2px', marginTop: 'auto', marginLeft: 'auto' }}/>
            </Box>
            <Box sx={{ padding: '1em' }}>
                <iframe src="https://dylanmpeck.github.io/Beat-Virus/" frameBorder="0" title='Re-O-Ri' style={{
                        width: '100%',
                        height: '100%',
                        position: 'fixed',
                        padding: '0px',
                    }} 
                />
            </Box>
        </Box>
    )
}

export default BeatVirus;
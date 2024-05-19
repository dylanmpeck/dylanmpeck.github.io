import { Box, Typography } from '@mui/material';

export interface ParagraphProps {
    content: any;
}

const Paragraph = (props: ParagraphProps) => {
    return (
        <Box sx={{ paddingTop: '1em'}}>
            <Typography variant="h5" color="text.primary">
                {props.content}
            </Typography>
        </Box>
    )
}

export default Paragraph;
import { Box, Divider, Typography } from '@mui/material';

export interface TitleProps {
    name: string;
    variant: any;
    align: any;
}

const PageTitle = (props: TitleProps) => {
    return (
        <Box sx={{ paddingTop: '2em'}}>
            <Typography variant={props.variant} align={props.align} color="text.secondary">
                {props.name}
            </Typography>
            <Divider sx={{ display: 'inline-block', bgcolor: "text.secondary", width: '100%', height: '2px', marginTop: 'auto', marginLeft: 'auto' }}/>
        </Box>
    )
}

export default PageTitle;
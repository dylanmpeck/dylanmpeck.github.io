import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

interface CardProps {
    title: string;
    imageUrl: string;
    role: string;
    actionLink: string;
  }
  
const ProjectCard = (props: CardProps) => {
    return (
        <Card
            raised={false}
            square={true}
        >
            <CardActionArea href={props.actionLink} action={() => {window.scrollTo(0, 0)}}>
                <Box sx={{ position: 'relative'}}>
                    <CardMedia
                    component="img"
                    image={process.env.PUBLIC_URL + props.imageUrl}
                    alt="re-o-ri"
                    sx={{ padding: "1em 1em 0 1em", objectFit: 'fill', height: 'auto', maxHeight: '450px'}}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: '1rem',
                            right: '1rem',
                            width: 'auto',
                            bgcolor: 'rgba(0, 0, 0, 0.54)',
                            color: 'white',
                            padding: '10px',
                        }}
                    >
                        <Typography gutterBottom variant="h3" component="div">
                            {props.title}
                        </Typography>
                    </Box>
                </Box>


                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align='center' color="text.secondary">
                    {props.role}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ProjectCard;
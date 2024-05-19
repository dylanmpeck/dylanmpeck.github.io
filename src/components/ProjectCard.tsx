import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

interface CardProps {
    title: string;
    imageUrl: string;
    role: string;
    actionLink: string;
  }
  
const ProjectCard = (props: CardProps) => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return (
        <Card
            raised={false}
            square={true}
        >
            <CardActionArea href={props.actionLink}>
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
                            overflow: 'hidden',
                        }}
                    >
                        <Typography gutterBottom variant={windowDimensions.width <= 500 ? "h4" : "h3"} component="div">
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
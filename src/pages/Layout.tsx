import React from 'react';
import { theme } from '../components/theme';
import { Outlet } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box, AppBar, Typography, IconButton, Icon, Container, Divider, Link, Paper } from '@mui/material';

// Fixed width container + Theme + Header + Outlet (child components)
const Layout = () => {
    return (
        <Container fixed>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" style={{ background: 'linear-gradient(to bottom, #212229, #26272f, #2b2c35, #30313c, #353642)'}}>
                        <Box sx={{ m: 1 }}>
                            <Link href="/" underline='none' color='inherit'>
                                <Typography variant="h3" color="text.secondary">
                                    Dylan Peck
                                </Typography>
                            </Link>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography variant="h5" color="text.primary">
                                Game Developer | Game Designer
                                </Typography>
                                <Box style={{ marginLeft: 'auto', display: 'inline-flex' }}>
                                    <IconButton href="https://www.linkedin.com/in/dylan-peck-b08160156">
                                        <Icon style={{ height: 'auto', maxHeight: '26px'}}>
                                            <img src={process.env.PUBLIC_URL + '/linkedin-icon.png'} alt="linkedin" height={24} width={24} />
                                        </Icon>
                                    </IconButton>
                                    <IconButton href="https://github.com/dylanmpeck">
                                        <Icon style={{ height: 'auto', maxHeight: '26px' }}>
                                            <img src={process.env.PUBLIC_URL + '/github-logo.png'} alt="github" height={24} width={24} />
                                        </Icon>
                                    </IconButton>
                                </Box>
                            </Box>
                        </Box>
                    </AppBar>
                </Box>
                <Divider sx={{ bgcolor: "text.secondary", width: '100%', height: '4px', marginTop: 'auto', marginLeft: 'auto' }}/>
                <Paper elevation={3} sx={{ padding: "2em"}}>
                    <Outlet />
                </Paper>
            </ThemeProvider>
        </Container>
    );
}

export default Layout;
import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, classes } from '@material-ui/core'


const Footer = () => {
    return (
        <div className='footer'>
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
                    {/* </IconButton> */}
                    {/* <Typography variant="h6" className={classes.title}> */}
                    News
                    {/* </Typography> */}
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Footer
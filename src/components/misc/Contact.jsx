// Contact.jsx
import React, { useState } from 'react';

import {
    Typography,
    TextField,
    Button,
} from '@material-ui/core';

import { useStyles } from './useStyles';

function Contact() {
    const classes = useStyles();
    const [name, setName] = useState("Stephen Oo");
    const [email, setEmail] = useState("stephen.oo@outlook.com");
    const [message, setMessage] = useState("Message in the bottle");

    const handleSubmit = () => {
        // submit the form
    }

    return (
        <div className={classes.root}>
            <Typography variant='h3' gutterBottom>
                Contact Us
            </Typography>
            <br />
            <form noValidate autoComplete='off'>
                <div>
                    <TextField
                        label='Full Name'
                        margin='normal'
                        variant='outlined'
                        fullWidth
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <TextField
                        label='Email Address'
                        margin='normal'
                        variant='outlined'
                        fullWidth
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <br />
                <TextField
                    label='Message'
                    multiline
                    rows='4'
                    margin='normal'
                    variant='outlined'
                    value={message}
                    fullWidth
                    onChange={e => setMessage(e.target.value)}
                />
                <br />
                <Button
                    fullWidth
                    variant='contained'
                    color='secondary'
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default Contact;

// eof
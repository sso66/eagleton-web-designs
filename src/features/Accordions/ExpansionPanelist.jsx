// ExpansionPanelist.jsx
import React, { useState, Fragment } from 'react';

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function ExpansionPanelist() {
    const [panels] = useState([
        {
            title: 'First Panel Title',
            content: 'First Panel Content...'
        },
        {
            title: 'Second Panel Title',
            content: 'Second Panel Content...'
        },
        {
            title: 'Third Panel Title',
            content: 'Third Panel Content...'
        },
        {
            title: 'Fourth Panel Title',
            content: 'Fourth Panel Content...'
        } 
    ]);

    return (
        <Fragment>
            {panels
                .filter(panel => !panel.hidden)
                .map((panel, index) => (
                    <Accordion
                        key={index}
                        disabled={panel.disabled}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography>{panel.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{panel.content}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
        </Fragment>
    );
}

// eof
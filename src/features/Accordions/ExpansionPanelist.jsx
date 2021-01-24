// ExpansionPanelist.jsx
import React, { useState, Fragment } from 'react';

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DevicesIcon from '@material-ui/icons/Devices';
import NetworkWifiIcon from '@material-ui/icons/NetworkWifi';
import StorageIcon from '@material-ui/icons/Storage';
import AcUnitIcon from '@material-ui/icons/AcUnit';

import { makeStyles } from '@material-ui/core/styles';
import theme from './theme';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 15,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        // border: 0,
        // borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'darkblue',
        // height: 48,
        padding: '0 30px',
    },
    icon: {
        marginRight: theme.spacing(1)
    },
    panelDetails: {
        flexDirection: 'column',
        height: 60,
        overflow: 'auto',
        textAlign: 'left'
    }
}));

export default function ExpansionPanelist() {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(0);
    const [panels] = useState([
        {
            title: 'First Panel title',
            content: `First Panel content...
            Sed ut perspiciatis unde omnis iste natus error sit 
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto 
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
            quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi 
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor 
            sit amet, consectetur, adipisci velit, sed quia non numquam eius 
            modi tempora incidunt ut labore et dolore magnam aliquam quaerat 
            voluptatem.`,
            icon: <DevicesIcon  className={classes.icon} />,
            color: '#F00'
        },
        {
            title: 'Second Panel title',
            content: 'Second Panel content...',
            icon: <NetworkWifiIcon className={classes.icon} />,
            color: '#0F0'
        },
        {
            title: 'Third Panel title',
            content: 'Third Panel content...',
            icon: <StorageIcon className={classes.icon} />,
            color: '#00F'
        },
        {
            title: 'Fourth Panel title',
            content: 'Fourth Panel content...',
            icon: <AcUnitIcon className={classes.icon} />,
            color: '#FF0'
        },
    ]);

    const onPanelChange = expanded => (index) => { 
        setExpanded(expanded);
    }

    return (
        <Fragment>
            {panels
                .filter((panel) => !panel.hidden)
                .map((panel, index) => (
                    <Accordion
                        key={index}
                        disabled={panel.disabled}
                        expanded={index === expanded}
                        onChange={onPanelChange(index)}
                        className={""}              
                    >
                        <div 
                            style={{
                                marginRight: 0.1,
                                borderLeft: `6px solid ${panel.color}`,
                                borderRadius: '3px'
                            }}
                        >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            
                        >
                            {panel.icon}
                            <Typography 
                                variant='subtitle1'
                                color='primary'
                            >
                                {panel.title}
                            </Typography>
                        </AccordionSummary>
                        </div>
                        <AccordionDetails 
                            className={classes.root}>
                            <Typography>
                                {panel.content}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
        </Fragment>
    );
}

// eof
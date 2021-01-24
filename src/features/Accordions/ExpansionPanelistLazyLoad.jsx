// ExpansionPanelistLazyLoad.jsx
import React, { useState, Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    lighten,
    darken,
    LinearProgress,
} from '@material-ui/core';

import theme from './theme';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DevicesIcon from '@material-ui/icons/Devices';
import NetworkWifiIcon from '@material-ui/icons/NetworkWifi';
import StorageIcon from '@material-ui/icons/Storage';

import ExpansionPanelistPromise from './ExpansionPanelistPromise';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 15,
        // background: darken(theme.palette.background.default, 0.5),
        // color: lighten(theme.palette.background.default, 0.1),
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

//___ API function that fetches based on an index value ___
const fetchPanelContent = index => 
    new Promise(resolve =>
        setTimeout(() => 
            resolve(
                [
                    `First Panel Content...
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

                    'Second Panel content...',
                    'Third Panel content...',
                ][index]
            ), 1000
        )
    );

const MaybeProgress = ({ loading }) => 
    loading ? <LinearProgress /> : null

export default function ExpansionPanelistLazyLoad() {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(-1);
    const [panels, setPanels] = useState([
        {
            title: 'First Panel Title',
            icon: <DevicesIcon  className={classes.icon} />,
            color: '#F00'
        },
        {
            title: 'Second Panel Title',
            icon: <NetworkWifiIcon className={classes.icon} />,
            color: '#0F0'
        },
        {
            title: 'Third Panel Title',
            icon: <StorageIcon className={classes.icon} />,
            color: '#00F'
        },
    ]);

    const onPanelChange = (index) => (event, expanded) => {
        if (!panels[index].content && expanded) {
            fetchPanelContent(index).then(content => {
                const newPanels = [...panels];
                newPanels[index] = {...newPanels[index], content};
                setPanels(newPanels)
            })
        }
    }

    return (
        <Fragment>
            {panels
                .map((panel, index) => ( 
                    <Accordion
                        key={index}
                        disabled={panel.disabled}
                        // expanded={index === expanded}
                        onChange={onPanelChange(index)}
                        className={classes.root}
                        square={false}                
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
                                <ExpansionPanelistPromise />
                            </Typography>
                            
                        </AccordionSummary>
                        </div>
                        <AccordionDetails 
                            className={classes.panelDetails}
                        >
                            <MaybeProgress loading={!panel.content} />
                        
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
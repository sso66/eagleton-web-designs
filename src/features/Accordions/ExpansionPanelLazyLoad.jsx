// ExpansionPanelLazyLoad.jsx
import React, { useState, Fragment } from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DevicesIcon from '@material-ui/icons/Devices';
import NetworkWifiIcon from '@material-ui/icons/NetworkWifi';
import StorageIcon from '@material-ui/icons/Storage';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(1)
    },
    panelDetails: {
        flexDirection: 'column',
        height: 50,
        overflow: 'auto',
        textAlign: 'left'
    }
}));

//___ API function that fetches based on an index value ___
const fetchPanelContent = index => 
    new Promise(resolve =>
        setTimeout(
            () => 
                resolve(
                    [][index]
                ),
            1000
        )
    );

export default function ExpansionPanelLazyLoad() {
    const classes = useStyles();
    const [panels] = useState([
        {
            title: 'First Panel Contend',
            content: `First Panel Content...
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
            icon: <DevicesIcon  className={classes.icon} />
        },
        {
            title: 'Second Panel Title',
            content: 'Second Panel Content...',
            icon: <NetworkWifiIcon className={classes.icon} />
        },
        {
            title: 'Third Panel Title',
            content: 'Third Panel Content...',
            icon: <StorageIcon className={classes.icon} />
        },
        {
            title: 'Fourth Panel Title',
            content: 'Fourth Panel Content...'
        } 
    ]);

    const onPanelChange = expanded => (index) => { // HOC
        // to do
    }

    // to do   
}


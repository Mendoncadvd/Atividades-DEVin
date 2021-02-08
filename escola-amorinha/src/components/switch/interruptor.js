import { Switch } from '@material-ui/core';
import React, {useState} from 'react';

const interruptor = (props) => {
    const { check, evento } = props

    return (
        <Switch 
        size="small"
        color="primary"
        checked={check}
        onChange={evento}
        />
    );
}

export default interruptor;

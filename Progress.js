import React from 'react';
import cn from 'classnames'
import {withStyles} from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress';
import flow from 'lodash/flow'

const Progress = ({classes, className, size}) => (
    <div className={cn(classes.container, className)}>
        <CircularProgress thickness={1} color="secondary" size={size} />
    </div>
)

const styles = theme => ({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 9999
    }
})

export default flow([
    withStyles(styles)
])(Progress)
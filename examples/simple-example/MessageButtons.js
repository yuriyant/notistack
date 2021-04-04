import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { useSnackbar } from 'notistack';

const styles = {
    root: {
        flexGrow: 1,
        display: 'flex',
        margin: 16,
        justifyContent: 'center',
        alignItems: 'middle',
    },
    button: {
        margin: 8,
        color: '#fff',
        backgroundColor: '#313131',
    },
    success: {
        backgroundColor: '#43a047',
    },
    error: {
        backgroundColor: '#d32f2f',
    },
    info: {
        backgroundColor: '#2979ff',
    },
    warning: {
        backgroundColor: '#ffa000',
    },
};

const buttons = [
    { variant: 'success', message: 'Successfully done the operation.' },
    { variant: 'error', message: 'Something went wrong.' },
    { variant: 'warning', message: 'Be careful of what you just did!' },
    { variant: 'info', message: 'For your info...' },
];


const MessageButtons = ({ classes }) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleClick = button => () => {
        enqueueSnackbar(button.message, { variant: button.variant });
    };

    const handleClickWithAction = () => {
        enqueueSnackbar('Customise this snackbar youself.', {
            variant: 'default',
            action: key => (
                <Fragment>
                    <Button color="secondary" size="small" onClick={() => alert(`Clicked on action of snackbar with key: ${key}`)}>
                        Detail
                    </Button>
                    <Button color="secondary" size="small" onClick={() => closeSnackbar(key)}>
                        Dismiss
                    </Button>
                </Fragment>
            ),
        });
    };

    return (
        <Paper className={classes.root}>
            {buttons.map(button => (
                <Button
                    key={button.variant}
                    variant="contained"
                    className={clsx(classes.button, classes[button.variant])}
                    onClick={handleClick(button)}
                >
                    {button.variant}
                </Button>
            ))}
            <Button
                variant="contained"
                className={classes.button}
                onClick={handleClickWithAction}
            >
                default
            </Button>
        </Paper>
    );
}

export default withStyles(styles)(MessageButtons);

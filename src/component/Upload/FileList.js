import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';


const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
});
class FileList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            files: [
                { "name": "111" },
                { "name": "222" },
            ],
        };
    }

    enQueue(files) {

    }

    Transition(props) {
        return <Slide direction="up" {...props} />;
    }
    openFileList = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;



        return (
            <Dialog
                fullScreen
                open={this.state.open}
                onClose={this.handleClose}
                TransitionComponent={this.Transition}
            >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.flex}>
                            上传队列
                        </Typography>

                    </Toolbar>
                </AppBar>
                <List>
                    {
                        this.state.files.map(function (item, i) {
                            return (
                                <ListItem button key={i}>
                                <ListItemText primary={item.name} secondary="Titania"  />
                            </ListItem>
                            );
                        })
                    }
                    <ListItem button>
                        <ListItemText primary="Phone ringtone" secondary="Titania" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="Default notification ringtone" secondary="Tethys" />
                    </ListItem>
                </List>
            </Dialog>
        );
    }

}
FileList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FileList);
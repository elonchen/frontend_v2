import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';

import { withStyles } from '@material-ui/core/styles';

import Navbar from "../component/Navbar.js"
import AlertBar from "../component/Snackbar"
import MarkdownViewer from "../component/Viewer/markdown"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme(
	{
		"palette":{
			"common":{
				"black":"#000","white":"#fff"
			},
			"background":{"paper":"#fff","default":"#fafafa"},
			"primary":{"light":"#7986cb","main":"#3f51b5","dark":"#303f9f","contrastText":"#fff"},
			"secondary":{"light":"#ff4081","main":"#f50057","dark":"#c51162","contrastText":"#fff"},
			"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},
			"text":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","hint":"rgba(0, 0, 0, 0.38)"},
			"explorer":{
				"filename":"#474849","icon":"#8f8f8f",
				"bgSelected":"#D5DAF0",
				"emptyIcon":"#e8e8e8", 
			}
		}
	}
);
const styles = theme => ({

	root: {
		display: 'flex',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 0,
		minWidth: 0,
	},
	toolbar: theme.mixins.toolbar,
});

class MarkdownApp extends Component {

	render() {
		const { classes } = this.props;
		return (
			<React.Fragment>
				<MuiThemeProvider theme={theme}>
					<div className={classes.root} id="container">
						<CssBaseline />
						<AlertBar/>
						<Navbar />
						<main className={classes.content}>
							<div className={classes.toolbar} />
							<MarkdownViewer/>
						</main>
					</div></MuiThemeProvider>
			</React.Fragment>
		);
	}
}

MarkdownApp.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MarkdownApp);
import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import { Route } from 'react-router-dom';

import SnackBar from './snackbar.jsx';
import CreateLeagueForm from './create-league/CreateLeagueForm.jsx';
import NavBar from './nav/index.jsx';
import Dashboard from './dashboard/dashboard.jsx';
import Help from './help/help.jsx';
import Modal from './modal/modal.jsx';
import { css_content } from './style';

const Content = props => {

	return (
		<div>
			<NavBar changeTheme={props.changeTheme} />
			<div className={props.menuOpen ? 'content-wrapper': 'content-wrapper-expanded'}>
				<Paper style={css_content.paper} zDepth={3}>
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/create" component={CreateLeagueForm} />
					<Route path="/help" component={Help} />
				</Paper>
			</div>
			<Modal />
			<SnackBar />
		</div>
	);
};


export default Content;

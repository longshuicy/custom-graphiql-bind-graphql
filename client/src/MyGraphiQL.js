import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import TopBar from './TopBar';
import styles from './styles.js';
import '../public/graphiql.css';
import GraphiQL from 'graphiql';
import {
  parse,
  print,
} from 'graphql';

export default class MyGraphiQL extends React.Component {
	 static propTypes = {
		fetcher: PropTypes.func.isRequired,
		query: PropTypes.string,
		variables: PropTypes.string,
		response: PropTypes.string,
		storage: PropTypes.shape({
		  getItem: PropTypes.func,
		  setItem: PropTypes.func,
		  removeItem: PropTypes.func
		}),
		onEditQuery: PropTypes.func,
		onEditVariables: PropTypes.func,
	}
	
	constructor(props){
		super(props);
		
		this.storage = props.storage || window.localStorage;
		const currentURL = this.props.endpoint;
		const query = props.query || this.storageGet(`${currentURL}:query`) || undefined;
		const variables = props.variables || this.storageGet(`${currentURL}:variables`) || undefined;
		
		this.state={
			schema:props.schema || null,
			query,
			variables,
			response:props.response,
			fetcher: this.props.fetcher,
			subscription:null,
		}
		
		autoBind(this,'handleRunQuery','onEditQuery','onEditVariables','storageSet','storageGet');
	}
	
	storageSet(name, value) {
		this.storage && this.storage.setItem('cgraphiql:' + name, value);
	}
	storageGet(name) {
		return this.storage && this.storage.getItem('cgraphiql:' + name);
	}
	onEditQuery(queryString) {
		this.setState({
		  query: queryString
		});
		const currentURL = this.props.endpoint;
		
		if (!currentURL) {
		  return;
		}
		this.storageSet(`${currentURL}:query`, queryString);
	}
	
	onEditVariables(variablesString) {
		this.setState({
		  variables: variablesString
		});
		const currentURL = this.props.endpoint;
		
		if (!currentURL) {
		  return;
		}

		this.storageSet(`${currentURL}:variables`, variablesString);
	}
	
	handleRunQuery(){
	  const editedQuery = this.state.query;
	  const variables = this.state.variables;
	  //console.log(this.state.query);
	  try{
		const subscription = this._fetchQuery(editedQuery,variables,result =>{
			//console.log(JSON.stringify(result,null,2));
			this.setState({
				response:JSON.stringify(result,null,2),
			});
		});
		this.setState({subscription});
	  }catch(error){
		  this.setState({
			  response:error.message
		  });
	  }
  }
	
	/*handleClickPrettifyButton(event) {
		const editor = this.getQueryEditor();
		const currentText = editor.getValue();
		const { parse, print } = require('graphql');
		const prettyText = print(parse(currentText));
		editor.setValue(prettyText);
	}
	
	getQueryEditor() {
		return this.queryEditorComponent.getCodeMirror();
	}*/

	_fetchQuery(query, variables, callback) {
		const fetcher = this.props.fetcher;
		let jsonVariables = null;

		try {
		  jsonVariables =
			variables && variables.trim() !== '' ? JSON.parse(variables) : null;
		} catch (error) {
		  throw new Error(`Variables are invalid JSON: ${error.message}.`);
		}

		if (typeof jsonVariables !== 'object') {
		  throw new Error('Variables are not a JSON object.');
		}
		
		const fetch = fetcher({
		  query,
		  variables: jsonVariables,
		});

		if (isPromise(fetch)) {
		  // If fetcher returned a Promise, then call the callback when the promise
		  // resolves, otherwise handle the error.
		  fetch.then(callback).catch(error => {
			this.setState({
			  isWaitingForResponse: false,
			  response: error && String(error.stack || error)
			});
		  });
		} else if (isObservable(fetch)) {
		  // If the fetcher returned an Observable, then subscribe to it, calling
		  // the callback on each next value, and handling both errors and the
		  // completion of the Observable. Returns a Subscription object.
		  const subscription = fetch.subscribe({
			next: callback,
			error: error => {
			  this.setState({
				isWaitingForResponse: false,
				response: error && String(error.stack || error),
				subscription: null
			  });
			},
			complete: () => {
			  this.setState({
				isWaitingForResponse: false,
				subscription: null
			  });
			}
		  });

		  return subscription;
		} else {
		  throw new Error('Fetcher did not return Promise or Observable.');
		}
	}
	
	

	render() {
		return (
		<div style={styles.container}>
			
			<GraphiQL 
				fetcher={this.state.fetcher}
				response={this.state.response}
				query={this.state.query}
				variables={this.state.variables}
				onEditQuery={this.onEditQuery}
				onEditVariables={this.onEditVariables}
				>
					
				<GraphiQL.Toolbar>
					<TopBar
						handleRunQuery={this.handleRunQuery}
						fetcher={this.state.fetcher}
						subscription={this.state.subscription}
						query={this.state.query}
						variables={this.state.variables}
						response={this.state.response}
					/>
				</GraphiQL.Toolbar>
				
			</GraphiQL>
			
		</div>
		);
	}
}

//helper function

function isPromise(value){
	  return typeof value === 'object' && typeof value.then === 'function';
}

function isObservable(value){
	return typeof value === 'object' && typeof value.subscribe === 'function';
}

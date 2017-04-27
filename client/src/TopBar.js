import React, { Component } from 'react';
import styles from './styles.js';
import autoBind from 'react-autobind';

export default class TopBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputFocused: false,
      inputValue: null,
	  //query: this.props.query, no need to be a state cuz there's no updating in the component!!otherwise error
	  response: this.props.response,
	  fetcher: this.props.fetcher,
	  handleRunQuery: this.props.handleRunQuery,
	  //handleClickPrettifyButton: this.props.handleClickPrettifyButton(),
	  //handleToggleHistory: this.props.handleToggleHistory(),
	  timer:null,
    };

	autoBind(this,'onInputKeyPress','onFetchButtonPressed','onStopButtonPressed');
  }

  onInputKeyPress(event) {
    if (event.which === 13) {
      this.urlInputRef && this.urlInputRef.blur();
      this.onFetchButtonPressed();
      event.preventDefault();
      return false;
    }

    return true;
  }

  onFetchButtonPressed() {
    const freq = this.state.inputValue;
	const handleRunQuery = this.state.handleRunQuery;
	const query = this.props.query;
	//console.log(query);
	//console.log(freq);
	
	var time = 0;
	var timer = setInterval(function(){
		time += 1;
		console.log("fetch " + time);
		handleRunQuery(query);
	}, freq*1000); //1000 = 1 second*/
	
	this.setState({timer: timer});
  }
  
  onStopButtonPressed() {
	clearInterval(this.state.timer);
  }

  render() {
    
    return (
      <div style={styles.topBar}>
        <form>
          <div>
			<div> Set Interval to ? Seconds </div>
            <input
              type={'number'}
              value={this.state.inputValue || ''}
              onChange={(event) => this.setState({ inputValue: event.target.value })}
              placeholder={'Input a Number here'}
              onFocus={() => this.setState({ inputFocused: true})}
              onBlur={() => this.setState({ inputFocused: false })}
              onKeyPress={this.onInputKeyPress}
			/>
		  </div>
        </form>
		
        <div
          className={'shadowButton'}
          style={{...styles.shadowButton}}
          onClick={this.onFetchButtonPressed}>
          Start Monitoring</div>
		 
		<div
          className={'shadowButton'}
          style={{...styles.shadowButton}}
          onClick={this.onStopButtonPressed}>
          Stop Monitoring</div>
			
	  </div>

    );
  }
}
  
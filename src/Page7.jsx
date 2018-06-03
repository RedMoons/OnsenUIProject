import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar, BackButton} from 'react-onsenui';
import {notification} from 'onsenui';

export default class Page7 extends React.Component {
  alertPopup() {
    notification.alert('This is an Onsen UI alert notification test.');
  }

  goback() {
    this.props.navigator.popPage();
  }
  
  	
  renderToolbar() {
    return (
      <Toolbar>
        <div className='left'><BackButton>Back</BackButton></div>
        <div className='center'>Onsen UI</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
	<h3>This is Page7</h3>
        <div>Page7 called!</div>
        <Button onClick={this.alertPopup}>Click Me!</Button>
        <Button onClick={this.goback.bind(this)}>Go Back</Button>
      </Page>
    );
  }
}

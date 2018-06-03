import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar, BackButton} from 'react-onsenui';
import {notification} from 'onsenui';

import Page7 from './Page7.jsx';

export default class Page6 extends React.Component {
  alertPopup() {
    notification.alert('This is an Onsen UI alert notification test.');
  }
  pushPage(){
	this.props.navigator.pushPage({component: Page7}); 
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
	<h3>This is Page6</h3>
        <div>Page6 called!</div>
        <Button onClick={this.alertPopup}>Click Me!</Button>
	<Button onClick={this.pushPage.bind(this)}>Next page!</Button> 
        <Button onClick={this.goback.bind(this)}>Go Back</Button>
      </Page>
    );
  }
}

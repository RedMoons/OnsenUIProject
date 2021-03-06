import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar} from 'react-onsenui';
import {notification} from 'onsenui';

import Page2 from './Page2.jsx';


export default class Page1 extends React.Component {
  alertPopup() {
    notification.alert('This is an Onsen UI alert notification test.');
  }
  pushPage(){
	this.props.navigator.pushPage({component: Page2});

  }	
  	
  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>Onsen UI</div>
      </Toolbar>
    );
  }

  render() {
    let pic = {
      uri: 'http://kristinmcgee.com/wp-content/uploads/2013/06/Prenatal-Cow-Pose.jpg'
    };
    return (
      <Page renderToolbar={this.renderToolbar}>
	<h3>This is Page1</h3>
        <div>Page1 called!</div>
        <Button onClick={this.alertPopup}>Click Me!</Button>
	<Button onClick={this.pushPage.bind(this)}>Next page!</Button>
      </Page>

    );
  }
}

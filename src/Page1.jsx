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
    return (
      <Page renderToolbar={this.renderToolbar}>
	<h3>This is Page1</h3>
        <div>Page1 called!</div>
        <Button onClick={this.alertPopup}>Click Me!</Button>
	<Button onClick={this.pushPage.bind(this)}>Next page!</Button>
<img src="https://media1.popsugar-assets.com/files/thumbor/Caa1L7vmpkfJyAdRXvKllC89w7I/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/09/29/751/n/1922729/124f94ef2657f78c_plank-palms-up.jpg" alt="Trulli" width="500" height="333">	
      </Page>
    );
  }
}

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionFactory from '../actions';

class App extends React.Component { 
  constructor(props) {
    super(props)
  }
  onChange(e){
    var value=e.target.value;
    this.props.dispatch(ActionFactory.changeDocumentsTitle(value));
  }
  render(){  
     return (
      <div>
        <input type="text" onChange={this.onChange.bind(this)} />
          {this.props.title}
      </div>
    );
  }
}

App.propTypes={  
  title:React.PropTypes.string,
  uri:React.PropTypes.string,
  dispatch: React.PropTypes.func.isRequired
};


function mapStateToProps(state){
  return {
    title: state.title,
    uri: state.uri
  };
}

function mapDispatchToProps(dispatch) {
  return {
    Actions:bindActionCreators(ActionFactory, dispatch)
  };
}
export default connect(mapStateToProps)(App);
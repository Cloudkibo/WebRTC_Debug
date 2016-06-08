import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Helmet from 'react-helmet';

class ErrorDetailView extends Component {
  componentDidMount() {
    this.props.dispatch(Actions.fetchErrors());
  }
  
  render() {
    return (
      <div>
        <h3>Welcome to Errors Page!</h3>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    error: store.error,
  };
}

export default connect(mapStateToProps)(ErrorDetailView);

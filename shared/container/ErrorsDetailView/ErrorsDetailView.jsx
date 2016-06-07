import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Helmet from 'react-helmet';

class ErrorDetailView extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
  }

  handleClick() {
    this.setState({
      showAddPost: true,
    });
  }

  handleLogoClick() {
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

ErrorDetailView.need = [(params) => {
  return Actions.fetchErrors();
}];

ErrorDetailView.contextTypes = {
  router: React.PropTypes.object,
};


function mapStateToProps(store) {
  return {
    post: (store.post),
  };
}

export default connect(mapStateToProps)(ErrorDetailView);

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function ErrorsListItem(props) {
  return (
    <div>
      <div className="single-error-item">
        <h3>
          <Link to={'/errors'} onClick={props.onClick}>
            Connectivity Errors
          </Link>
        </h3>
      </div>
      <div className="single-error-item">
        <h3>Screen Sharing Errors</h3>
      </div>
      <div className="single-error-item">
        <h3>Datachannel Errors</h3>
      </div>
      <div className="single-error-item">
        <h3>Create_Offer Errors</h3>
      </div>
      <div className="single-error-item">
        <h3>Set_Offer Errors</h3>
      </div>
      <div className="single-error-item">
        <h3>Create_Answer Errors</h3>
      </div>
      <div className="single-error-item">
        <h3>Set_Answer Errors</h3>
      </div>
    </div>
  );
}

export default ErrorsListItem;

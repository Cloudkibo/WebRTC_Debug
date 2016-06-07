import React, { PropTypes } from 'react';
import PostListItem from '../../components/PostListItem/PostListItem';
import ErrorsListItem from '../../components/ErrorsListItem/ErrorsListitem';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';

function PostListView(props) {
  return (
    <div className="listView">
      <ErrorsListItem />
      
    </div>
  );
}

PostListView.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(PostListView);

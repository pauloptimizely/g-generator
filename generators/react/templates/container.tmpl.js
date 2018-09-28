import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * <%= componentName %>
 *
 */

class <%= componentName %> extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="<%= componentSlugName %>">
      </div>
    );
  }
}

<%= componentName %>.defaultProps = {

};

<%= componentName %>.propTypes = {

};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(<%= componentName %>);

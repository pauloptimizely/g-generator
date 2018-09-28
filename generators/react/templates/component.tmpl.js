import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

export default <%= componentName %>;

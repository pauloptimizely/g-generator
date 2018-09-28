import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * <%= componentName %>
 *
 */

class <%= componentName %> extends PureComponent {
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

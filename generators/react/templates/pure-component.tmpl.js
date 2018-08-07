import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

import './<%= componentSlugName %>.scss';

class <%= componentName %> extends Component {
  render() {
    return (
      <div className="<%= componentSlugName %>">
      </div>
    )
  }
}

<%= componentName %>.defaultProps = {

};

<%= componentName %>.propTypes = {

};

export default <%= componentName %>;
import React from 'react';
import { mount } from 'enzyme';

import <%= componentName %> from './<%= componentName %>';

/**
 * returns test props
 */
const getProps = props => ({
  ...props,
});

/**
 * returns mounted component with props
 */
const getComponent = (props) => (mount(<<%= componentName %> {...getProps(props)} />));

describe('components/<%= componentName %>', function() {
  describe('basic rendering', function() {

  });

  describe('editing', function() {

  });

});

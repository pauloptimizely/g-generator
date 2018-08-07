import React from 'react';
import { mount } from 'enzyme';

import <%= componentName %> from './<%= componentName %>';

const getTestProps = props => ({
  ...props,
});

describe('', function() {
  let component;
  beforeEach(function() {
    component = mount(
        <<%= componentName %> {...getTestProps()} />
    );
  });

  afterEach(function() {

  });

  describe('basic rendering', function() {
    it('should render <%= componentName %>', function() {
      expect(component.find('<%= componentName %>').exists()).toBe(true);
    });
  });

  describe('editing', function() {

  });

});

import 'react-native'
import React from 'react'

import Simple from '../examples/Simple';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Simple />);
});

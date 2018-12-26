import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module)
  .add('with text', () => (
    <p className="text-right">Hello Button</p>
  ))
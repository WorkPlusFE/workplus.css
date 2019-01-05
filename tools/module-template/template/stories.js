import React from 'react';
import { storiesOf } from '@storybook/react';
import readme from './README.md';

const notes = { markdown: readme };

storiesOf('<%= name %>', module)
  .add('Default story', () => (
    <p><%= name %></p>
  ), { notes });

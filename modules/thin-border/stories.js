import React from 'react';
import { storiesOf } from '@storybook/react';
import readme from './README.md';

const notes = { markdown: readme };

storiesOf('@workplus-css/thin-border', module)
  .add('Default story', () => (
    <p>@workplus-css/thin-border</p>
  ), { notes });
import React from 'react';
import { storiesOf } from '@storybook/react';
import readme from './README.md';

const notes = { markdown: readme };

storiesOf('Form', module)
  .add('Default story', () => (
    <div className="w-block">
      <div className="w-form">
        <input type="text" placeholder="Name"/>
        <input type="password" placeholder="Password"/>
        <button className="w-btn w-btn-block w-btn-primary w-mt-30" type="button">Sign Up Now</button>
      </div>
    </div>
  ), { notes });
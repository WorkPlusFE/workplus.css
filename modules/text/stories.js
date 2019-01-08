import React from 'react';
import { storiesOf } from '@storybook/react';

import './stories.css';

storiesOf('Text', module)
  .add('Align', () => (
    <div className="w-block">
      <p className="w-text-left border">w-text-left</p>
      <p className="w-text-center border">w-text-center</p>
      <p className="w-text-right border">w-text-right</p>
    </div>
  ))
  .add('Color', () => (
    <div className="w-block">
      <p className="w-text-gray border">w-text-gray</p>
      <p className="w-text-tips border">w-text-tips</p>
      <p className="w-text-primary border">w-text-primary</p>
      <p className="w-text-danger border">w-text-danger</p>
    </div>
  ))
  .add('Size', () => (
    <div className="w-block">
      <p className="w-text-primary w-text-small border">w-text-small</p>
      <p className="w-text-danger border">w-text-default</p>
    </div>
  ))
import React from 'react';
import { storiesOf } from '@storybook/react';
import readme from './README.md';

import './stories.css';

const notes = { markdown: readme };

storiesOf('Thin border', module)
  .add('Default story', () => (
    <ul className="w-tb-top ul-item">
      <li className="w-tb-bottom li-item">1</li>
      <li className="w-tb-bottom li-item">2</li>
      <li className="w-tb-bottom li-item">3</li>
      <li className="w-tb-bottom li-item">4</li>
      <li className="w-tb-bottom li-item">5</li>
      <li className="w-tb-bottom li-item">6</li>
    </ul>
  ), { notes });
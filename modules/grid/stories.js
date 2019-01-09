import React from 'react';
import { storiesOf } from '@storybook/react';
import readme from './README.md';

import './stories.css';

const notes = { markdown: readme };

storiesOf('Grid', module)
  .add('Default story', () => (
    <div className="w-block">
      <p>Default</p>
      <div className="w-clear">
        <div className="w-col-4 w-float-left border grid-item">1</div>
        <div className="w-col-4 w-float-left border grid-item">2</div>
        <div className="w-col-4 w-float-left border grid-item">3</div>
      </div>
      <p>Nesting</p>
      <div className="w-clear">
        <div className="w-col-4 w-float-left border grid-item">1</div>
        <div className="w-col-8 w-float-left w-clear">
          <div className="w-col-2 w-float-left border grid-item">2</div>
          <div className="w-col-10 w-float-left border grid-item">3</div>
        </div>
      </div>
      <p>Center</p>
      <div className="w-clear border">
        <div className="w-col-4 w-mx-auto border grid-item">center</div>
      </div>
    </div>
  ), { notes })
  .add('Gutter', () => (
    <div className="w-block">
      <p>w-gutter</p>
      <div className="w-clear w-gutter">
        <div className="w-col-4 w-float-left">
          <div className="border grid-item">1</div>
        </div>
        <div className="w-col-4 w-float-left">
          <div className="border grid-item">2</div>
        </div>
        <div className="w-col-4 w-float-left">
          <div className="border grid-item">3</div>
        </div>
      </div>
      <p>w-gutter-20</p>
      <div className="w-clear w-gutter-20">
        <div className="w-col-4 w-float-left">
          <div className="border grid-item">1</div>
        </div>
        <div className="w-col-4 w-float-left">
          <div className="border grid-item">2</div>
        </div>
        <div className="w-col-4 w-float-left">
          <div className="border grid-item">3</div>
        </div>
      </div>
      <p>w-gutter-30</p>
      <div className="w-clear w-gutter-30">
        <div className="w-col-4 w-float-left">
          <div className="border grid-item">1</div>
        </div>
        <div className="w-col-4 w-float-left">
          <div className="border grid-item">2</div>
        </div>
        <div className="w-col-4 w-float-left">
          <div className="border grid-item">3</div>
        </div>
      </div>
    </div>
    
  ), { notes });
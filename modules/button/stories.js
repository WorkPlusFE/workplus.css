import React from 'react';
import { storiesOf } from '@storybook/react';
import readme from './README.md';

import './stories.css';

const Wrapper = ({ title, children }) => (<div>
  <div className="w-block-title">{title}</div>
  <div className="w-block buttons-demo">
    {children}
  </div>
</div>);

const notes = { markdown: readme };

storiesOf('Button', module)
  .add('Button type', () => (
    <Wrapper title='Button Type'>
      <button className="w-btn" type="button">Default Button</button>
      <button className="w-btn w-btn-primary" type="button">Primary Button</button>
      <button className="w-btn w-btn-info" type="button">Info Button</button>
      <button className="w-btn w-btn-success" type="button">Success Button</button>
      <button className="w-btn w-btn-warning" type="button">Warning Button</button>
      <button className="w-btn w-btn-error" type="button">Error Button</button>
    </Wrapper>
  ), { notes })
  .add('Block button', () => (
    <Wrapper title='Block Button'>
      <a href="javascript:;" className="w-btn w-btn-block">Default Button</a>
      <a href="javascript:;" className="w-btn w-btn-block w-btn-primary">Primary Button</a>
      <a href="javascript:;" className="w-btn w-btn-block w-btn-info">Info Button</a>
      <a href="javascript:;" className="w-btn w-btn-block w-btn-success">Success Button</a>
      <a href="javascript:;" className="w-btn w-btn-block w-btn-warning">Warning Button</a>
      <a href="javascript:;" className="w-btn w-btn-block w-btn-error">Error Button</a>
    </Wrapper>
  ), { notes })
  .add('Disabled state', () => (
    <Wrapper title='Disabled state'>
      <button className="w-btn w-btn-block" disabled type="button">Disabled Button</button>
      <button className="w-btn w-btn-primary" disabled type="button">Disabled Button</button>
      <button className="w-btn w-btn-error" disabled type="button">Disabled Button</button>
    </Wrapper>
  ), { notes })
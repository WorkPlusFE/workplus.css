import React from 'react';
import { storiesOf } from '@storybook/react';

const Wrapper = ({ title, children }) => (<div>
  <div className="block-title">{title}</div>
  <div className="block">
    {children}
  </div>
</div>);

storiesOf('Typography', module)
  .add('Heading utilities', () => (
    <Wrapper>
      <h1>H1</h1>
      <h2>H2</h2>
      <h3>H3</h3>
      <h4>H4</h4>
      <h5>H5</h5>
      <h6>H6</h6>
    </Wrapper>
  ))
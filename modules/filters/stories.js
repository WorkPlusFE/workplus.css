import React from 'react';
import { storiesOf } from '@storybook/react';

const Wrapper = ({ title, children }) => (<div>
  <div className="w-block-title">{title}</div>
  <div className="w-block">
    {children}
  </div>
</div>);

storiesOf('Filters', module)
  .add('Image gray scale', () => (
    <Wrapper title="Image gray scale">
      <p>Before</p>
      <img 
        width="100" 
        src="https://avatars0.githubusercontent.com/u/20390887?s=400&u=fa15a44cacefd20449cbddd8619305afa00b59c8&v=4" 
        alt="demo"
      />
      <p>After</p>
      <img 
        className="w-grayscale"
        width="100" 
        src="https://avatars0.githubusercontent.com/u/20390887?s=400&u=fa15a44cacefd20449cbddd8619305afa00b59c8&v=4" 
        alt="demo"
      />
    </Wrapper>
  ))
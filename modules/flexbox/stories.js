import React from 'react';
import { storiesOf } from '@storybook/react';
import readme from './README.md';

import './stories.css';

const notes = { markdown: readme };

storiesOf('Flexbox', module)
  .add('Direction', () => (
    <div className="w-block">
      <p>Default</p>
      <div className="w-flex">
        <div className="flex-item w-flex-1">1</div>
        <div className="flex-item w-flex-2">2</div>
        <div className="flex-item w-flex-3">3</div>
      </div>
      <p>Column</p>
      <div className="w-flex w-flex-column">
        <div className="flex-item">1</div>
        <div className="flex-item">2</div>
        <div className="flex-item">3</div>
      </div>
      <p>Row reverse</p>
      <div className="w-flex w-flex-row-reverse">
        <div className="flex-item w-flex-1">1</div>
        <div className="flex-item w-flex-2">2</div>
        <div className="flex-item w-flex-3">3</div>
      </div>
      <p>Column reverse</p>
      <div className="w-flex w-flex-column-reverse">
        <div className="flex-item w-flex-1">1</div>
        <div className="flex-item w-flex-2">2</div>
        <div className="flex-item w-flex-3">3</div>
      </div>
    </div>
  ), { notes })
  .add('Wrap', () => (
    <div className="w-block">
      <p>Default</p>
      <div className="w-flex">
        <div className="flex-item w-flex-1">1</div>
        <div className="flex-item w-flex-1">2</div>
        <div className="flex-item w-flex-1">3</div>
        <div className="flex-item w-flex-1">4</div>
        <div className="flex-item w-flex-1">5</div>
        <div className="flex-item w-flex-1">6</div>
      </div>
      <p>No wrap</p>
      <div className="w-flex w-flex-nowrap">
        <div className="flex-item w-flex-1 w-flex-noshrink">1</div>
        <div className="flex-item w-flex-1 w-flex-noshrink">2</div>
        <div className="flex-item w-flex-1 w-flex-noshrink">3</div>
        <div className="flex-item w-flex-1 w-flex-noshrink">4</div>
        <div className="flex-item w-flex-1 w-flex-noshrink">5</div>
        <div className="flex-item w-flex-1 w-flex-noshrink">6</div>
      </div>
      <p>Wrap reverse</p>
      <div className="w-flex w-flex-wrap-reverse">
        <div className="flex-item w-flex-1 w-flex-noshrink">1</div>
        <div className="flex-item w-flex-1 w-flex-noshrink">2</div>
        <div className="flex-item w-flex-1 w-flex-noshrink">3</div>
        <div className="flex-item w-flex-1 w-flex-noshrink">4</div>
        <div className="flex-item w-flex-1 w-flex-noshrink">5</div>
        <div className="flex-item w-flex-1 w-flex-noshrink">6</div>
      </div>
    </div>
  ), { notes })
  .add('Align', () => (
    <div className="w-block">
      <p>Default</p>
      <div className="flex-box w-flex">
        <div className="flex-item w-flex-1">1</div>
        <div className="flex-item w-flex-1">2</div>
        <div className="flex-item w-flex-1">3</div>
      </div>
      <p>Center</p>
      <div className="flex-box w-flex w-flex-center">
        <div className="flex-item w-flex-1">1</div>
        <div className="flex-item w-flex-1">2</div>
        <div className="flex-item w-flex-1">3</div>
      </div>
      <p>List item</p>
      <div className="flex-box w-flex w-flex-center">
        <div className="flex-item w-flex-none">Avatar</div>
        <div className="flex-item w-flex-1">Title</div>
        <div className="flex-item w-flex-none">Right</div>
      </div>
      <p>Profile</p>
      <div className="flex-box w-flex">
        <div className="flex-item w-flex-none w-flex-sc">Avatar</div>
        <div className="flex-item w-flex w-flex-column w-flex-1 w-flex-jc" 
          style={{height: 100}}
        >
          <div className="text-left w-pl-15">Name</div>
          <div className="text-left w-pl-15">Job Title</div>
        </div>
      </div>
    </div>
  ), { notes })
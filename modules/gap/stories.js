import React from 'react';
import { storiesOf } from '@storybook/react';
import readme from './README.md';

import './stories.css';

const notes = { markdown: readme };

storiesOf('Gap', module)
  .add('Gap element', () => (
    <div className="w-block">
      <p>w-gap-5</p>
      <p className="gap-bg w-gap-5"></p>
      <p>w-gap-10</p>
      <p className="gap-bg w-gap-10"></p>
      <p>w-gap-15</p>
      <p className="gap-bg w-gap-15"></p>
      <p>w-gap-20</p>
      <p className="gap-bg w-gap-20"></p>
      <p>w-gap-25</p>
      <p className="gap-bg w-gap-25"></p>
      <p>w-gap-30</p>
      <p className="gap-bg w-gap-30"></p>
    </div>
  ), { notes })
  .add('Margin', () => (
    <div className="w-block">
      <div className="margin-orange">
        <span className="w-m-5">w-m-5</span>
      </div>
      <div className="margin-orange">
        <span className="w-m-10">w-m-10</span>
      </div>
      <div className="margin-orange">
        <span className="w-m-15">w-m-15</span>
      </div>
      <div className="margin-orange">
        <span className="w-m-20">w-m-20</span>
      </div>
      <div className="margin-orange">
        <span className="w-m-25">w-m-25</span>
      </div>
      <div className="margin-orange">
        <span className="w-m-30">w-m-30</span>
      </div>
      <div className="margin-orange">
        <span className="w-mt-30">w-mt-30</span>
      </div>
      <div className="margin-orange">
        <span className="w-mr-20">w-mr-20</span>
      </div>
      <div className="margin-orange">
        <span className="w-mb-10">w-mb-10</span>
      </div>
      <div className="margin-orange">
        <span className="w-ml-30">w-ml-30</span>
      </div>
      <div className="margin-orange">
        <span className="w-mx-30">w-mx-30</span>
      </div>
      <div className="margin-orange">
        <span className="w-my-30">w-my-30</span>
      </div>
    </div>
  ), { notes })
  .add('Padding', () => (
    <div className="w-block">
      <div className="padding-green w-p-5">
        <span>w-p-5</span>
      </div>
      <div className="padding-green w-p-10">
        <span>w-p-10</span>
      </div>
      <div className="padding-green w-p-15">
        <span>w-p-15</span>
      </div>
      <div className="padding-green w-p-20">
        <span>w-p-20</span>
      </div>
      <div className="padding-green w-p-25">
        <span>w-p-25</span>
      </div>
      <div className="padding-green w-p-30">
        <span>w-p-30</span>
      </div>
      <div className="padding-green w-pt-30">
        <span>w-pt-30</span>
      </div>
      <div className="padding-green w-pr-30">
        <span>w-pr-30</span>
      </div>
      <div className="padding-green w-pb-30">
        <span>w-pb-30</span>
      </div>
      <div className="padding-green w-pl-30">
        <span>w-pl-30</span>
      </div>
      <div className="padding-green w-px-30">
        <span>w-px-30</span>
      </div>
      <div className="padding-green w-py-30">
        <span>w-py-30</span>
      </div>
    </div>
  ), { notes });

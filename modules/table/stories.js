import React from 'react';
import { storiesOf } from '@storybook/react';
import readme from './README.md';

const notes = { markdown: readme };

storiesOf('Table', module)
  .add('Default table', () => (
    <div className="w-block">
      <table className="w-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Hejx</td>
            <td>18</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Hejx</td>
            <td>18</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Hejx</td>
            <td>18</td>
          </tr>
        </tbody>
      </table>
    </div>
  ), { notes });
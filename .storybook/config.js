import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { configureViewport } from '@storybook/addon-viewport';
import { withNotes } from '@storybook/addon-notes';
import '../modules/workplus.css'
import { version } from '../modules/workplus.css/package.json'

setOptions({
  name: `Workplus CSS v${version}`,
  url: 'https://github.com/WorkPlusFE/workplus.css',
  showDownPanel: false,
})

configureViewport({
  defaultViewport: 'iphone6',
});

addDecorator(story => (
  <div className='w-page'>
    <div className='w-page-content'>
    {story()}
    </div>
  </div>
));

addDecorator(withNotes);

const contexts = [
  require.context('../modules', true, /stories.*\.js$/),
]

configure(() => {
  contexts.forEach(context => {
    context.keys()
      .filter(key => !key.includes('node_modules'))
      .forEach(context)
  })
}, module);

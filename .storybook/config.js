import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/index.story.js');
}

configure(loadStories, module);
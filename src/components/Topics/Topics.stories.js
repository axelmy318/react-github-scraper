import React from 'react';

import { Topics } from '../..';
import GithubScraper from '../..'

export default {
  title: 'Topics/Topics',
  component: Topics,
  argTypes: {
    showChars: { control: 'number' }
  },
};

const Template = (args) => {
    return (<>
        <div style={{width: '300px'}}>
            <GithubScraper {...args.github}>
                <Topics {...args.component} />
            </GithubScraper>
        </div>
    </>)
};

export const Primary = Template.bind({});
Primary.args = {
    github: {
        username:'axelmy318',
        repository:'react-readme-printer',
        branch:'master',
    },
    component: {
        label: 'Topics',
    }
};

export const Secondary = Template.bind({});
Secondary.args = {
    github: {
        username:'axelmy318',
        repository:'react-github-scraper',
        branch:'master',
    },
    component: {
        prefix: null,
    }
};